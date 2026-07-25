import { ESSAYS_BY_UNIT, SOURCE_SETS_BY_UNIT } from '../data/bank';
import { getUnit } from '../data/units';
import type {
  AttemptSection,
  EssayQuestion,
  SourceSet,
  SyllabusPointId,
  UnitId,
} from '../data/types';
import type { SectionPlan } from './paper';

// Exam generation following the manuals' set-design rules:
//  - source set and all essay questions must sit inside the student's checked
//    syllabus points;
//  - the essay set must not collide with a source set's theme from the same
//    unit;
//  - three distinct frames, at most one proposition question (E1/E2);
//  - strands and eras sampled; difficulty balanced;
//  - unseen material strongly preferred over repeats.

export class GenerationError extends Error {}

function subset(tags: SyllabusPointId[], checked: Set<SyllabusPointId>): boolean {
  return tags.every((t) => checked.has(t));
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PROPOSITION_FRAMES = new Set(['E1', 'E2']);

function scoreTrio(trio: EssayQuestion[], seenEssayIds: Set<string>): number | null {
  // Hard constraints → null
  const frames = new Set(trio.map((q) => q.frame));
  if (frames.size !== 3) return null;
  const propositions = trio.filter((q) => PROPOSITION_FRAMES.has(q.frame)).length;
  if (propositions > 1) return null;

  let score = 0;
  // Strand sampling: aim for three different strands.
  const strands = new Set(trio.map((q) => q.strand));
  score += strands.size * 2;
  // Era sampling: reward spread across the period.
  const eras = new Set(trio.map((q) => q.era));
  score += eras.size * 2;
  // Difficulty balance: the choice between questions should be of content, not difficulty.
  const demands = trio.map((q) => q.demand);
  score -= (Math.max(...demands) - Math.min(...demands)) * 1.5;
  // Prefer unseen questions strongly.
  for (const q of trio) if (!seenEssayIds.has(q.id)) score += 4;
  // Small jitter so equal-scoring sets vary between generations.
  score += Math.random();
  return score;
}

/** Candidate source sets: unseen first (shuffled), then seen ones in
 *  least-recently-seen order, so a valid exam is found whenever one exists. */
function sourceCandidates(
  eligible: SourceSet[],
  seenSourceSetIds: string[],
): SourceSet[] {
  const seen = new Set(seenSourceSetIds);
  const unseen = shuffle(eligible.filter((s) => !seen.has(s.id)));
  const order = new Map(seenSourceSetIds.map((id, i) => [id, i]));
  const seenLru = eligible
    .filter((s) => seen.has(s.id))
    .sort((a, b) => (order.get(a.id) ?? -1) - (order.get(b.id) ?? -1));
  return [...unseen, ...seenLru];
}

/** Best essay trio from a pool, or null when none satisfies the hard rules. */
function pickTrio(pool: EssayQuestion[], seenEssays: Set<string>): EssayQuestion[] | null {
  const best: { trio: EssayQuestion[]; score: number }[] = [];
  for (let i = 0; i < pool.length - 2; i++) {
    for (let j = i + 1; j < pool.length - 1; j++) {
      for (let k = j + 1; k < pool.length; k++) {
        const trio = [pool[i], pool[j], pool[k]];
        const score = scoreTrio(trio, seenEssays);
        if (score === null) continue;
        best.push({ trio, score });
      }
    }
  }
  if (best.length === 0) return null;
  best.sort((a, b) => b.score - a.score);
  const top = best.slice(0, Math.min(5, best.length));
  const pick = top[Math.floor(Math.random() * top.length)];
  // Present essay questions in a stable, sensible order: by era then frame.
  const eraOrder = { early: 0, mid: 1, late: 2, whole: 3 };
  return pick.trio
    .slice()
    .sort((a, b) => eraOrder[a.era] - eraOrder[b.era] || a.frame.localeCompare(b.frame));
}

interface UnitPick {
  sourceSet: SourceSet | null;
  essays: EssayQuestion[] | null;
}

/** Choose the material for one unit: a source set and/or an essay trio that
 *  fit the checked points and, when both are wanted, do not collide. */
function pickForUnit(
  unit: UnitId,
  wantSource: boolean,
  wantEssay: boolean,
  checked: Set<SyllabusPointId>,
  seenSets: string[],
  seenEssays: Set<string>,
): UnitPick {
  const name = getUnit(unit).short;
  const eligibleSets = (SOURCE_SETS_BY_UNIT[unit] ?? []).filter((s) => subset(s.tags, checked));
  const eligibleEssays = (ESSAYS_BY_UNIT[unit] ?? []).filter((e) => subset(e.tags, checked));

  if (wantSource && eligibleSets.length === 0) {
    throw new GenerationError(
      'No ' + name + ' source-analysis sets fit the syllabus points you selected. Tick more ' + name + ' topics (the earliest topics unlock the first sets).',
    );
  }
  if (wantEssay && eligibleEssays.length < 3) {
    throw new GenerationError(
      'Not enough ' + name + ' essay questions fit the syllabus points you selected. Tick more ' + name + ' topics and try again.',
    );
  }

  if (!wantEssay) {
    return { sourceSet: sourceCandidates(eligibleSets, seenSets)[0], essays: null };
  }
  if (!wantSource) {
    const trio = pickTrio(eligibleEssays, seenEssays);
    if (!trio) {
      throw new GenerationError(
        'Could not assemble a varied set of ' + name + ' essay questions from the syllabus points you selected. Tick more ' + name + ' topics and try again.',
      );
    }
    return { sourceSet: null, essays: trio };
  }

  // Both: essay questions must not collide with the source set's theme.
  for (const sourceSet of sourceCandidates(eligibleSets, seenSets)) {
    const pool = eligibleEssays.filter((e) => !e.themes.includes(sourceSet.themeKey));
    if (pool.length < 3) continue;
    const trio = pickTrio(pool, seenEssays);
    if (!trio) continue;
    return { sourceSet, essays: trio };
  }
  throw new GenerationError(
    'Could not assemble a full ' + name + ' paper from the syllabus points you selected. Tick more ' + name + ' topics and try again.',
  );
}

/** Build the paper: one attempt section per plan, in plan order. */
export function generateExam(
  plans: SectionPlan[],
  checkedPoints: SyllabusPointId[],
  seenSourceSetIds: string[],
  seenEssayIds: string[],
): AttemptSection[] {
  if (plans.length === 0) {
    throw new GenerationError('Choose at least one section for your paper.');
  }
  const checked = new Set(checkedPoints);
  const seenEssays = new Set(seenEssayIds);

  const units = [...new Set(plans.map((p) => p.unit))];
  const picks = new Map<UnitId, UnitPick>();
  for (const unit of units) {
    const wantSource = plans.some((p) => p.unit === unit && p.kind === 'source');
    const wantEssay = plans.some((p) => p.unit === unit && p.kind === 'essay');
    picks.set(unit, pickForUnit(unit, wantSource, wantEssay, checked, seenSourceSetIds, seenEssays));
  }

  return plans.map((p): AttemptSection => {
    const pick = picks.get(p.unit)!;
    if (p.kind === 'source') {
      return {
        kind: 'source',
        unit: p.unit,
        sourceSetId: pick.sourceSet!.id,
        answers: { a: '', b: '', c: '' },
      };
    }
    return {
      kind: 'essay',
      unit: p.unit,
      essayIds: pick.essays!.map((q) => q.id),
      essayChoice: null,
      essayText: '',
    };
  });
}
