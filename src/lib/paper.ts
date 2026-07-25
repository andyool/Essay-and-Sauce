import { getEssay, getSourceSet } from '../data/bank';
import { getUnit } from '../data/units';
import type {
  Attempt,
  AttemptSection,
  EssaySection,
  FeedbackPart,
  SourceSection,
  TeacherFeedback,
  UnitId,
} from '../data/types';
import { wordCount } from './format';

// A paper is a list of sections — any mix of source-analysis and essay
// sections, possibly drawn from different units. This module holds everything
// that reasons about a paper's shape: marks, part keys for feedback, labels,
// the presets students start from, and the upgrade of attempts saved before
// papers had sections.

export const SOURCE_SECTION_MARKS = 20;
export const ESSAY_SECTION_MARKS = 30;

const SECTION_WORDS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

export function sectionWord(index: number): string {
  return SECTION_WORDS[index] ?? String(index + 1);
}

export function sectionMarks(s: AttemptSection): number {
  return s.kind === 'source' ? SOURCE_SECTION_MARKS : ESSAY_SECTION_MARKS;
}

export function paperMarks(sections: AttemptSection[]): number {
  return sections.reduce((n, s) => n + sectionMarks(s), 0);
}

/** "Section Two — Essay: Nazism in Germany" (for tabs and headings). */
export function sectionTitle(s: AttemptSection, index: number): string {
  const kind = s.kind === 'source' ? 'Source Analysis' : 'Essay';
  return 'Section ' + sectionWord(index) + ' — ' + kind + ': ' + getUnit(s.unit).short;
}

/** Short label for a section tab: "1 · Sources — Capitalism". */
export function sectionTab(s: AttemptSection, index: number): string {
  return (index + 1) + ' · ' + (s.kind === 'source' ? 'Sources' : 'Essay') + ' — ' + getUnit(s.unit).short;
}

/** One-line description of a paper for lists: unit by unit, what it asked. */
export function paperLabel(sections: AttemptSection[]): string {
  const byUnit = new Map<UnitId, string[]>();
  for (const s of sections) {
    const list = byUnit.get(s.unit) ?? [];
    list.push(s.kind === 'source' ? 'sources' : 'essay');
    byUnit.set(s.unit, list);
  }
  return [...byUnit.entries()]
    .map(([unit, kinds]) => getUnit(unit).short + ': ' + kinds.join(' + '))
    .join(' · ');
}

/** All words the student has written across the paper. */
export function attemptWords(sections: AttemptSection[]): number {
  let n = 0;
  for (const s of sections) {
    if (s.kind === 'source') {
      n += wordCount(s.answers.a) + wordCount(s.answers.b) + wordCount(s.answers.c);
    } else {
      n += wordCount(s.essayText);
    }
  }
  return n;
}

// ---- feedback parts ----

export type PartLetter = 'a' | 'b' | 'c' | 'essay';

/** The stored key for one markable part: 's1a' … 's3e'. */
export function partKey(sectionIndex: number, letter: PartLetter): FeedbackPart {
  return 's' + (sectionIndex + 1) + (letter === 'essay' ? 'e' : letter);
}

export interface PaperPart {
  key: FeedbackPart;
  sectionIndex: number;
  letter: PartLetter;
  max: number;
}

/** Every markable part of a paper, in paper order. */
export function paperParts(sections: AttemptSection[]): PaperPart[] {
  const parts: PaperPart[] = [];
  sections.forEach((s, i) => {
    if (s.kind === 'source') {
      const set = getSourceSet(s.sourceSetId);
      for (const letter of ['a', 'b', 'c'] as const) {
        parts.push({
          key: partKey(i, letter),
          sectionIndex: i,
          letter,
          max: set?.questions.find((q) => q.letter === letter)?.marks ?? 0,
        });
      }
    } else {
      parts.push({ key: partKey(i, 'essay'), sectionIndex: i, letter: 'essay', max: ESSAY_SECTION_MARKS });
    }
  });
  return parts;
}

export function emptyFeedback(sections: AttemptSection[]): TeacherFeedback {
  const marks: Record<FeedbackPart, number | null> = {};
  const comments: Record<FeedbackPart, string> = {};
  const picks: Record<FeedbackPart, (number | null)[]> = {};
  for (const p of paperParts(sections)) {
    marks[p.key] = null;
    comments[p.key] = '';
    picks[p.key] = [];
  }
  return { marks, comments, picks, overall: '', returnedAt: null, updatedAt: 0 };
}

/** Sum of the marks entered so far (unmarked parts count as 0). */
export function feedbackTotal(f: TeacherFeedback): number {
  return Object.values(f.marks).reduce<number>((n, m) => n + (m ?? 0), 0);
}

/** True once every part of the paper has a mark. */
export function feedbackComplete(f: TeacherFeedback, sections: AttemptSection[]): boolean {
  return paperParts(sections).every((p) => f.marks[p.key] !== null && f.marks[p.key] !== undefined);
}

// ---- upgrading attempts saved before papers had sections ----

const LEGACY_PART_KEYS: Record<string, FeedbackPart> = {
  a: 's1a',
  b: 's1b',
  c: 's1c',
  essay: 's2e',
};

function upgradeRecord<T>(rec: Record<string, T> | undefined): Record<string, T> {
  const out: Record<string, T> = {};
  for (const [k, v] of Object.entries(rec ?? {})) out[LEGACY_PART_KEYS[k] ?? k] = v;
  return out;
}

/** Bring a stored attempt up to the sections form. Attempts saved before
 *  units existed hold one Nazism source set and one Nazism essay trio in
 *  flat fields; rebuild those into two sections (and re-key any feedback).
 *  Returns the same object when nothing needed doing. */
export function upgradeAttempt(a: Attempt): Attempt {
  if (Array.isArray(a.sections) && a.sections.length > 0) return a;
  const source: SourceSection = {
    kind: 'source',
    unit: 'nazism',
    sourceSetId: a.sourceSetId ?? '',
    answers: a.answers ?? { a: '', b: '', c: '' },
  };
  const essay: EssaySection = {
    kind: 'essay',
    unit: 'nazism',
    essayIds: a.essayIds ?? [],
    essayChoice: a.essayChoice ?? null,
    essayText: a.essayText ?? '',
  };
  const upgraded: Attempt = {
    ...a,
    sections: [source, essay],
    page: a.page === 2 ? 2 : 1,
  };
  if (a.feedback) {
    upgraded.feedback = {
      ...a.feedback,
      marks: upgradeRecord(a.feedback.marks),
      comments: upgradeRecord(a.feedback.comments),
      ...(a.feedback.picks ? { picks: upgradeRecord(a.feedback.picks) } : {}),
    };
  }
  return upgraded;
}

// ---- what a student asks for when starting a paper ----

export interface SectionPlan {
  kind: 'source' | 'essay';
  unit: UnitId;
}

export function planMarks(plans: SectionPlan[]): number {
  return plans.reduce((n, p) => n + (p.kind === 'source' ? SOURCE_SECTION_MARKS : ESSAY_SECTION_MARKS), 0);
}

/** Order the requested sections the way a real paper would: all source
 *  analysis first, then essays, each in semester order. */
export function orderPlans(plans: SectionPlan[]): SectionPlan[] {
  const kindRank = { source: 0, essay: 1 };
  return plans
    .slice()
    .sort(
      (a, b) =>
        kindRank[a.kind] - kindRank[b.kind] || getUnit(a.unit).semester - getUnit(b.unit).semester,
    );
}

export interface PaperPreset {
  id: string;
  label: string;
  help: string;
  plans: SectionPlan[];
  minutes: number;
}

export function presetsForYear(year: 11 | 12): PaperPreset[] {
  if (year === 11) {
    return [
      {
        id: 'y11-exam',
        label: 'The end-of-year exam (2½ hours)',
        help: 'The real Semester 2 exam: Nazi Germany sources and essay, plus a Capitalism source analysis.',
        plans: [
          { kind: 'source', unit: 'nazism' },
          { kind: 'source', unit: 'capitalism' },
          { kind: 'essay', unit: 'nazism' },
        ],
        minutes: 150,
      },
      {
        id: 'y11-nazism',
        label: 'Nazi Germany only (1½ hours)',
        help: 'One source analysis and one essay from Nazism in Germany.',
        plans: [
          { kind: 'source', unit: 'nazism' },
          { kind: 'essay', unit: 'nazism' },
        ],
        minutes: 90,
      },
      {
        id: 'y11-capitalism',
        label: 'Capitalism only (1½ hours)',
        help: 'One source analysis and one essay from Capitalism — the American experience.',
        plans: [
          { kind: 'source', unit: 'capitalism' },
          { kind: 'essay', unit: 'capitalism' },
        ],
        minutes: 90,
      },
    ];
  }
  return [
    {
      id: 'y12-exam',
      label: 'The full exam — both units (3 hours)',
      help: 'Sources and an essay from each of Russia & the USSR and the changing European world.',
      plans: [
        { kind: 'source', unit: 'russia' },
        { kind: 'source', unit: 'europe' },
        { kind: 'essay', unit: 'russia' },
        { kind: 'essay', unit: 'europe' },
      ],
      minutes: 180,
    },
    {
      id: 'y12-russia',
      label: 'Russia & the USSR only (1½ hours)',
      help: 'One source analysis and one essay from Russia and the Soviet Union 1914–45.',
      plans: [
        { kind: 'source', unit: 'russia' },
        { kind: 'essay', unit: 'russia' },
      ],
      minutes: 90,
    },
    {
      id: 'y12-europe',
      label: 'Europe since 1945 only (1½ hours)',
      help: 'One source analysis and one essay from the changing European world since 1945.',
      plans: [
        { kind: 'source', unit: 'europe' },
        { kind: 'essay', unit: 'europe' },
      ],
      minutes: 90,
    },
  ];
}

/** Everything a student has already seen, oldest first, so the generator can
 *  prefer fresh material and fall back to the longest-ago repeats. */
export function seenMaterial(attempts: Attempt[]): { sets: string[]; essays: string[] } {
  const chrono = attempts.slice().sort((a, b) => a.createdAt - b.createdAt);
  const sets: string[] = [];
  const essays: string[] = [];
  for (const a of chrono) {
    for (const s of a.sections) {
      if (s.kind === 'source') sets.push(s.sourceSetId);
      else essays.push(...s.essayIds);
    }
  }
  return { sets, essays };
}

/** The syllabus tags a submitted paper actually tested: its source sets, plus
 *  the essays the student chose. */
export function coveredPoints(a: Attempt): Set<string> {
  const covered = new Set<string>();
  for (const s of a.sections) {
    if (s.kind === 'source') {
      for (const t of getSourceSet(s.sourceSetId)?.tags ?? []) covered.add(t);
    } else if (s.essayChoice !== null) {
      for (const t of getEssay(s.essayIds[s.essayChoice])?.tags ?? []) covered.add(t);
    }
  }
  return covered;
}
