import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { SOURCE_SETS, ESSAYS } from '../src/data/bank';
import { generateExam } from '../src/lib/generator';
import type { SyllabusPointId } from '../src/data/types';
import { ALL_POINT_IDS, INDIVIDUAL_IDS } from '../src/data/syllabus';

let errors: string[] = [];

const themeKeys = new Set(SOURCE_SETS.map((s) => s.themeKey));
const validTags = new Set<string>(ALL_POINT_IDS);
const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

// ids and theme keys must be unique
{
  const seen = new Set<string>();
  for (const s of SOURCE_SETS) {
    if (seen.has(s.id)) errors.push(`duplicate set id ${s.id}`);
    seen.add(s.id);
  }
  const themes = new Set<string>();
  for (const s of SOURCE_SETS) {
    if (themes.has(s.themeKey)) errors.push(`duplicate themeKey ${s.themeKey}`);
    themes.add(s.themeKey);
  }
  const eids = new Set<string>();
  for (const e of ESSAYS) {
    if (eids.has(e.id)) errors.push(`duplicate essay id ${e.id}`);
    eids.add(e.id);
  }
}

for (const s of SOURCE_SETS) {
  // every set carries 1–2 real images, and the files exist on disk
  const images = s.sources.filter((src) => src.image);
  if (images.length < 1 || images.length > 2) errors.push(`${s.id}: ${images.length} images (want 1–2)`);
  for (const src of s.sources) {
    if (src.kind === 'visual' && !src.image) errors.push(`${s.id}: visual source ${src.n} has no image`);
    if (src.image) {
      if (!existsSync(join(publicDir, src.image.src))) errors.push(`${s.id}: missing file ${src.image.src}`);
      if (!src.image.alt || !src.image.credit) errors.push(`${s.id}: image ${src.image.src} lacks alt/credit`);
    }
  }
}

for (const s of SOURCE_SETS) {
  const [a, b, c] = s.questions;
  if (a.marks + b.marks + c.marks !== 20) errors.push(`${s.id}: marks sum ${a.marks + b.marks + c.marks}`);
  if (c.marks !== 10) errors.push(`${s.id}: (c) is ${c.marks}`);
  if (!((a.marks === 3 && b.marks === 7) || (a.marks === 4 && b.marks === 6))) errors.push(`${s.id}: bad see-saw ${a.marks}+${b.marks}`);
  if (s.split !== `${a.marks}+${b.marks}`) errors.push(`${s.id}: split field mismatch`);
  const at = a.text.toLowerCase();
  if (!/(identify|outline|explain|account for)/.test(at)) errors.push(`${s.id}: (a) verb? "${a.text}"`);
  if (/(assess|evaluate|discuss|compare)/.test(at)) errors.push(`${s.id}: banned verb in (a)`);
  const bt = b.text.toLowerCase();
  if (!/(compare|account for|discuss)/.test(bt)) errors.push(`${s.id}: (b) verb? "${b.text}"`);
  const ct = c.text.toLowerCase();
  if (!/(analyse|assess|evaluate)/.test(ct)) errors.push(`${s.id}: (c) verb? "${c.text}"`);
  if (!/sources 1, 2 and 3|all three sources/.test(ct)) errors.push(`${s.id}: (c) source ref? "${c.text}"`);
  for (const t of s.tags) if (!validTags.has(t)) errors.push(`${s.id}: bad tag ${t}`);
  for (const src of s.sources) {
    if (src.image && !src.image.src.startsWith('sources/')) errors.push(`${s.id}: image path ${src.image.src}`);
  }
}

for (const e of ESSAYS) {
  for (const t of e.tags) if (!validTags.has(t)) errors.push(`${e.id}: bad tag ${t}`);
  for (const th of e.themes) if (!themeKeys.has(th)) errors.push(`${e.id}: unknown theme "${th}"`);
  if (!/\d{4}|period of study|period of Nazi rule|Weimar years|decade/.test(e.text) && !/(rise|by \d)/.test(e.text)) errors.push(`${e.id}: no scope device? "${e.text}"`);
}

// generator invariants
const subsets: SyllabusPointId[][] = [
  [...ALL_POINT_IDS],
  // every main dot point must generate exams on its own
  ['p1'], ['p2'], ['p3'], ['p4'], ['p5'], ['p6'],
  ['p1','p2'],
  ['p1','p2','p3','i-hitler'],
  ['p2','p3','p4','i-stresemann','i-hindenburg'],
  ['p4','p5','p6',...INDIVIDUAL_IDS],
  ['p1','p2','p3','p4','p5','p6'],
];
const PROP = new Set(['E1','E2']);
let gens = 0;
for (const checked of subsets) {
  for (let i = 0; i < 300; i++) {
    const seenSets = SOURCE_SETS.filter(() => Math.random() < 0.3).map((s) => s.id);
    const seenEssays = ESSAYS.filter(() => Math.random() < 0.3).map((e) => e.id);
    let exam;
    try {
      exam = generateExam(checked, seenSets, seenEssays);
    } catch (err) {
      errors.push(`gen fail for ${checked.join(',')}: ${(err as Error).message}`);
      break;
    }
    gens++;
    const set = SOURCE_SETS.find((s) => s.id === exam.sourceSetId)!;
    const cs = new Set(checked);
    if (!set.tags.every((t) => cs.has(t))) errors.push(`gen: set ${set.id} outside ${checked}`);
    const qs = exam.essayIds.map((id) => ESSAYS.find((e) => e.id === id)!);
    if (new Set(qs.map((q) => q.frame)).size !== 3) errors.push('gen: dup frames');
    if (qs.filter((q) => PROP.has(q.frame)).length > 1) errors.push('gen: >1 proposition');
    for (const q of qs) {
      if (!q.tags.every((t) => cs.has(t))) errors.push(`gen: essay ${q.id} outside ${checked}`);
      if (q.themes.includes(set.themeKey)) errors.push(`gen: collision ${q.id} vs ${set.id}`);
    }
  }
}

console.log(`Sets: ${SOURCE_SETS.length}, Essays: ${ESSAYS.length}, generations tested: ${gens}`);
console.log(errors.length ? 'ERRORS:\n' + [...new Set(errors)].join('\n') : 'ALL CHECKS PASSED');
if (errors.length) process.exit(1);
