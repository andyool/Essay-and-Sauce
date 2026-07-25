// Fetch an image from Wikimedia Commons into public/sources/.
//
//   node scripts/fetchImage.mjs search "<query>"            — list candidate files
//   node scripts/fetchImage.mjs get "<File:...>" <out-name> — download 1400px thumb
//
// `get` prints the licence/artist metadata needed for the credit line.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const API = 'https://commons.wikimedia.org/w/api.php';
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'sources');
const UA = { headers: { 'User-Agent': 'EssaySauce/1.0 (school practice site; image sourcing)' } };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchRetry(url) {
  for (let i = 0; i < 5; i++) {
    const res = await fetch(url, UA);
    if (res.status !== 429) return res;
    await sleep(3000 * (i + 1));
  }
  return fetch(url, UA);
}

async function api(params) {
  const url = API + '?' + new URLSearchParams({ action: 'query', format: 'json', ...params });
  const res = await fetchRetry(url);
  return res.json();
}

const [, , cmd, a, b] = process.argv;

if (cmd === 'search') {
  const data = await api({
    generator: 'search',
    gsrsearch: a,
    gsrnamespace: '6',
    gsrlimit: '12',
    prop: 'imageinfo',
    iiprop: 'url|size|extmetadata',
    iiurlwidth: '320',
  });
  const pages = Object.values(data.query?.pages ?? {});
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    const meta = info?.extmetadata ?? {};
    console.log(
      p.title,
      '|', info?.width + 'x' + info?.height,
      '|', (meta.LicenseShortName?.value ?? '?'),
      '|', (meta.ImageDescription?.value ?? '').replace(/<[^>]+>/g, '').slice(0, 140).replace(/\n/g, ' '),
    );
  }
} else if (cmd === 'get') {
  const data = await api({
    titles: a,
    prop: 'imageinfo',
    iiprop: 'url|size|extmetadata',
    iiurlwidth: '1400',
  });
  const page = Object.values(data.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info) {
    console.error('NOT FOUND: ' + a);
    process.exit(1);
  }
  const meta = info.extmetadata ?? {};
  const url = info.thumburl ?? info.url;
  const res = await fetchRetry(url);
  if (!res.ok) {
    console.error('DOWNLOAD FAILED: ' + res.status);
    process.exit(1);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const out = join(outDir, b);
  writeFileSync(out, buf);
  console.log('saved', b, Math.round(buf.length / 1024) + 'KB');
  console.log('license:', meta.LicenseShortName?.value ?? '?');
  console.log('artist:', (meta.Artist?.value ?? '?').replace(/<[^>]+>/g, '').slice(0, 120));
  console.log('credit:', (meta.Credit?.value ?? '?').replace(/<[^>]+>/g, '').slice(0, 120));
  console.log('desc:', (meta.ImageDescription?.value ?? '?').replace(/<[^>]+>/g, '').slice(0, 300).replace(/\n/g, ' '));
} else {
  console.log('usage: fetchImage.mjs search "<query>" | get "File:..." <out.jpg>');
}
