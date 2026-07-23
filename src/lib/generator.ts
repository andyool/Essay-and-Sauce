import { ESSAYS, SOURCE_SETS } from '../data/bank';
import type { EssayQuestion, SourceSet, SyllabusPointId } from '../data/types';

// Exam generation following the manuals' set-design rules:
//  - source set and all essay questions must sit inside the student's checked
//    syllabus points;
//  - the essay set must not collide with the source set's theme;
//  - three distinct frames, at most one proposition question (E1/E2);
//  - strands and eras sampled; difficulty balanced;
//  - unseen material strongly preferred over repeats.

export interface GeneratedExam {
  sourceSetId: string;
  essayIds: string[];
}

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

export function generateExam(
  checkedPoints: SyllabusPointId[],
  seenSourceSetIds: string[],
  seenEssayIds: string[],
): GeneratedExam {
  const checked = new Set(checkedPoints);
  const seenSets = new Set(seenSourceSetIds);
  const seenEssays = new Set(seenEssayIds);

  const eligibleSets = SOURCE_SETS.filter((s) => subset(s.tags, checked));
  if (eligibleSets.length === 0) {
    throw new GenerationError(
      'No source-analysis sets fit the syllabus points you selected. Tick more syllabus points (the earliest topics unlock the first sets).',
    );
  }

  const eligibleEssays = ESSAYS.filter((e) => subset(e.tags, checked));
  if (eligibleEssays.length < 3) {
    throw new GenerationError(
      'Not enough essay questions fit the syllabus points you selected. Tick more syllabus points and try again.',
    );
  }

  // Try unseen source sets first (shuffled), then fall back to seen ones in
  // least-recently-seen order, so a valid exam is found whenever one exists.
  const unseenSets = shuffle(eligibleSets.filter((s) => !seenSets.has(s.id)));
  const order = new Map(seenSourceSetIds.map((id, i) => [id, i]));
  const seenLru = eligibleSets
    .filter((s) => seenSets.has(s.id))
    .sort((a, b) => (order.get(a.id) ?? -1) - (order.get(b.id) ?? -1));
  const setCandidates: SourceSet[] = [...unseenSets, ...seenLru];

  for (const sourceSet of setCandidates) {
    // Essay questions must not collide with the source set's theme.
    const pool = eligibleEssays.filter((e) => !e.themes.includes(sourceSet.themeKey));
    if (pool.length < 3) continue;

    // Enumerate all trios, score them, pick randomly among the best.
    let best: { trio: EssayQuestion[]; score: number }[] = [];
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
    if (best.length === 0) continue;
    best.sort((a, b) => b.score - a.score);
    const top = best.slice(0, Math.min(5, best.length));
    const pick = top[Math.floor(Math.random() * top.length)];
    // Present essay questions in a stable, sensible order: by era then frame.
    const eraOrder = { early: 0, mid: 1, late: 2, whole: 3 };
    const ordered = pick.trio
      .slice()
      .sort((a, b) => eraOrder[a.era] - eraOrder[b.era] || a.frame.localeCompare(b.frame));
    return { sourceSetId: sourceSet.id, essayIds: ordered.map((q) => q.id) };
  }

  throw new GenerationError(
    'Could not assemble a full exam from the syllabus points you selected. Tick more syllabus points and try again.',
  );
}
