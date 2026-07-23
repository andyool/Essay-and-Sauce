// Turning a marking key into something the teacher can click.
//
// Every marking key is a list of sections, and every section is a list of rows
// that each award a number of marks. Marking is therefore just picking rows:
// the mark for the question is the sum of what has been picked.

import { ESSAY_RUBRIC } from '../data/rubric';
import type { FeedbackPart, KeySection, SourceSet } from '../data/types';

/** The marks a row can award: '3' → [3]; '7–8' → [7, 8]. */
export function rowMarks(marks: string): number[] {
  const ends = marks.split(/[–—-]/).map((p) => Number(p.trim()));
  if (ends.length === 2 && ends.every(Number.isFinite) && ends[1] >= ends[0]) {
    const out: number[] = [];
    for (let m = ends[0]; m <= ends[1]; m++) out.push(m);
    return out;
  }
  return Number.isFinite(ends[0]) ? [ends[0]] : [];
}

/** The most any single row of a section awards. */
function bestRow(sec: KeySection): number {
  return Math.max(0, ...sec.rows.flatMap((r) => rowMarks(r.marks)));
}

/** The most a section can award. */
export function sectionMax(sec: KeySection): number {
  return sec.subtotal ?? bestRow(sec);
}

/** Most sections are ladders: the rows are bands and exactly one of them is
 *  awarded. A few are checklists — such as the two 1-mark identification rows
 *  in a "reliability of both sources" question — where the rows add up to the
 *  subtotal and each is earned separately. */
export function isChecklist(sec: KeySection): boolean {
  return bestRow(sec) < sectionMax(sec);
}

/** The essay rubric as marking-key sections, so the essay is marked by
 *  clicking in exactly the same way as Section One. */
export const ESSAY_SECTIONS: KeySection[] = ESSAY_RUBRIC.map((c) => ({
  heading: c.name + ' (' + c.max + ' marks)',
  rows: c.levels,
  subtotal: c.max,
}));

/** The sections the teacher clicks through to mark one part of the paper. */
export function sectionsFor(part: FeedbackPart, set: SourceSet): KeySection[] {
  if (part === 'essay') return ESSAY_SECTIONS;
  return set.questions.find((q) => q.letter === part)!.key;
}

// Rows are numbered straight through a key, section after section, so one flat
// array of awards per part is all that has to be stored with the feedback.

/** The flat index of each section's first row. */
export function sectionStarts(sections: KeySection[]): number[] {
  const starts: number[] = [];
  let n = 0;
  for (const sec of sections) {
    starts.push(n);
    n += sec.rows.length;
  }
  return starts;
}

export function rowCount(sections: KeySection[]): number {
  return sections.reduce((n, sec) => n + sec.rows.length, 0);
}

/** Total awarded by a set of picks (rows not picked count as nothing). */
export function picksTotal(picks: (number | null)[]): number {
  return picks.reduce<number>((n, p) => n + (p ?? 0), 0);
}

/** Awarded within one section, and whether anything in it was picked at all. */
export function sectionScore(
  sections: KeySection[],
  picks: (number | null)[],
  index: number,
): { got: number; picked: boolean } {
  const start = sectionStarts(sections)[index];
  const rows = sections[index].rows;
  let got = 0;
  let picked = false;
  for (let i = 0; i < rows.length; i++) {
    const p = picks[start + i];
    if (p !== null && p !== undefined) {
      got += p;
      picked = true;
    }
  }
  return { got, picked };
}
