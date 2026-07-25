import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { ESSAYS, ESSAYS_BY_UNIT, SOURCE_SETS, SOURCE_SETS_BY_UNIT } from '../src/data/bank';
import { generateExam } from '../src/lib/generator';
import type { SectionPlan } from '../src/lib/paper';
import type { SyllabusPointId, UnitId } from '../src/data/types';
import { UNITS, getUnit, individualIds, unitPointIds } from '../src/data/units';

let errors: string[] = [];

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

// ids and theme keys must be unique across the whole bank
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

for (const unit of UNITS) {
  const sets = SOURCE_SETS_BY_UNIT[unit.id];
  const essays = ESSAYS_BY_UNIT[unit.id];
  const validTags = new Set<string>(unitPointIds(unit));
  const themeKeys = new Set(sets.map((s) => s.themeKey));

  for (const s of sets) {
    // The original Nazism bank ships real images; newer units may describe
    // their visual sources until image files are added.
    const images = s.sources.filter((src) => src.image);
    if (unit.id === 'nazism') {
      if (images.length < 1 || images.length > 2) errors.push(`${s.id}: ${images.length} images (want 1–2)`);
      for (const src of s.sources) {
        if (src.kind === 'visual' && !src.image) errors.push(`${s.id}: visual source ${src.n} has no image`);
      }
    }
    for (const src of s.sources) {
      if (src.image) {
        if (!existsSync(join(publicDir, src.image.src))) errors.push(`${s.id}: missing file ${src.image.src}`);
        if (!src.image.alt || !src.image.credit) errors.push(`${s.id}: image ${src.image.src} lacks alt/credit`);
        if (!src.image.src.startsWith('sources/')) errors.push(`${s.id}: image path ${src.image.src}`);
      }
    }

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
  }

  for (const e of essays) {
    for (const t of e.tags) if (!validTags.has(t)) errors.push(`${e.id}: bad tag ${t}`);
    for (const th of e.themes) if (!themeKeys.has(th)) errors.push(`${e.id}: unknown theme "${th}"`);
    if (
      !/\d{4}|period of study|period of Nazi rule|Weimar years|decade|century|Cold War/.test(e.text) &&
      !/(rise|by \d)/.test(e.text)
    ) {
      errors.push(`${e.id}: no scope device? "${e.text}"`);
    }
  }
}

// ---- generator invariants ----

interface GenCase {
  plans: SectionPlan[];
  checked: SyllabusPointId[];
}

function fullPaper(unit: UnitId): SectionPlan[] {
  return [
    { kind: 'source', unit },
    { kind: 'essay', unit },
  ];
}

const NAZI_INDIVIDUALS = individualIds(getUnit('nazism'));

const cases: GenCase[] = [
  // Every unit generates a full single-unit paper from its full selection.
  ...UNITS.map((u) => ({ plans: fullPaper(u.id), checked: unitPointIds(u) })),
  // The real exam presets.
  {
    plans: [
      { kind: 'source', unit: 'nazism' },
      { kind: 'source', unit: 'capitalism' },
      { kind: 'essay', unit: 'nazism' },
    ],
    checked: [...unitPointIds(getUnit('nazism')), ...unitPointIds(getUnit('capitalism'))],
  },
  {
    plans: [
      { kind: 'source', unit: 'russia' },
      { kind: 'source', unit: 'europe' },
      { kind: 'essay', unit: 'russia' },
      { kind: 'essay', unit: 'europe' },
    ],
    checked: [...unitPointIds(getUnit('russia')), ...unitPointIds(getUnit('europe'))],
  },
  // The Nazism bank keeps its original guarantee: every main dot point can
  // generate a full paper on its own.
  ...['p1', 'p2', 'p3', 'p4', 'p5', 'p6'].map((p) => ({ plans: fullPaper('nazism'), checked: [p] })),
  { plans: fullPaper('nazism'), checked: ['p1', 'p2'] },
  { plans: fullPaper('nazism'), checked: ['p1', 'p2', 'p3', 'i-hitler'] },
  { plans: fullPaper('nazism'), checked: ['p2', 'p3', 'p4', 'i-stresemann', 'i-hindenburg'] },
  { plans: fullPaper('nazism'), checked: ['p4', 'p5', 'p6', ...NAZI_INDIVIDUALS] },
  // Newer units: realistic early-course (cumulative) selections.
  { plans: fullPaper('capitalism'), checked: ['cap-p1', 'cap-p2'] },
  { plans: fullPaper('capitalism'), checked: ['cap-p1', 'cap-p2', 'cap-p3', 'cap-p4'] },
  { plans: fullPaper('russia'), checked: ['rus-p1', 'rus-p2', 'rus-p3'] },
  { plans: fullPaper('russia'), checked: ['rus-p1', 'rus-p2', 'rus-p3', 'rus-p4', 'rus-p5'] },
  { plans: fullPaper('europe'), checked: ['eur-p1', 'eur-p2'] },
  { plans: fullPaper('europe'), checked: ['eur-p1', 'eur-p2', 'eur-p3', 'eur-p4'] },
  // Sections on their own: sources-only and essays-only for narrow selections.
  { plans: [{ kind: 'source', unit: 'europe' }], checked: ['eur-p1'] },
  { plans: [{ kind: 'essay', unit: 'europe' }], checked: ['eur-p1'] },
  { plans: [{ kind: 'source', unit: 'russia' }], checked: ['rus-p2'] },
  { plans: [{ kind: 'essay', unit: 'russia' }], checked: ['rus-p2'] },
  { plans: [{ kind: 'source', unit: 'capitalism' }], checked: ['cap-p4'] },
];

const PROP = new Set(['E1', 'E2']);
let gens = 0;
for (const { plans, checked } of cases) {
  for (let i = 0; i < 200; i++) {
    const seenSets = SOURCE_SETS.filter(() => Math.random() < 0.3).map((s) => s.id);
    const seenEssays = ESSAYS.filter(() => Math.random() < 0.3).map((e) => e.id);
    let sections;
    try {
      sections = generateExam(plans, checked, seenSets, seenEssays);
    } catch (err) {
      errors.push(
        `gen fail for [${plans.map((p) => p.kind + ':' + p.unit).join(', ')}] with ${checked.join(',')}: ${(err as Error).message}`,
      );
      break;
    }
    gens++;
    const cs = new Set(checked);
    if (sections.length !== plans.length) errors.push('gen: wrong section count');
    const themeBySourceUnit = new Map<UnitId, string>();
    for (const [si, sec] of sections.entries()) {
      if (sec.kind !== plans[si].kind || sec.unit !== plans[si].unit) errors.push('gen: plan order broken');
      if (sec.kind === 'source') {
        const set = SOURCE_SETS_BY_UNIT[sec.unit].find((s) => s.id === sec.sourceSetId);
        if (!set) {
          errors.push(`gen: set ${sec.sourceSetId} not in unit ${sec.unit}`);
          continue;
        }
        if (!set.tags.every((t) => cs.has(t))) errors.push(`gen: set ${set.id} outside ${checked}`);
        themeBySourceUnit.set(sec.unit, set.themeKey);
      }
    }
    for (const sec of sections) {
      if (sec.kind !== 'essay') continue;
      const qs = sec.essayIds.map((eid) => ESSAYS_BY_UNIT[sec.unit].find((e) => e.id === eid)!);
      if (qs.some((q) => !q)) {
        errors.push(`gen: essay outside unit ${sec.unit}`);
        continue;
      }
      if (new Set(qs.map((q) => q.frame)).size !== 3) errors.push('gen: dup frames');
      if (qs.filter((q) => PROP.has(q.frame)).length > 1) errors.push('gen: >1 proposition');
      const theme = themeBySourceUnit.get(sec.unit);
      for (const q of qs) {
        if (!q.tags.every((t) => cs.has(t))) errors.push(`gen: essay ${q.id} outside ${checked}`);
        if (theme && q.themes.includes(theme)) errors.push(`gen: collision ${q.id} vs theme ${theme}`);
      }
    }
  }
}

for (const unit of UNITS) {
  console.log(
    `${unit.short}: ${SOURCE_SETS_BY_UNIT[unit.id].length} sets, ${ESSAYS_BY_UNIT[unit.id].length} essays`,
  );
}
console.log(`Total: ${SOURCE_SETS.length} sets, ${ESSAYS.length} essays, generations tested: ${gens}`);
console.log(errors.length ? 'ERRORS:\n' + [...new Set(errors)].join('\n') : 'ALL CHECKS PASSED');
if (errors.length) process.exit(1);
