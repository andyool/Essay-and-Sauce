// Core data model for the question bank and student attempts.

export type SyllabusPointId = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7';

export interface SyllabusPoint {
  id: SyllabusPointId;
  short: string; // checkbox label
  full: string;  // full syllabus wording
  sub?: string[];
}

export type Era = 'early' | 'mid' | 'late' | 'whole';

export interface SourceDoc {
  n: 1 | 2 | 3;
  kind: 'visual' | 'text';
  attribution: string;
  body: string;          // extract text, or a detailed description of the visual source
  note?: string;         // transcription/identification note beneath a visual
  footnotes?: string[];  // glossed vocabulary
}

export interface KeyRow {
  descriptor: string;
  marks: string; // "3" or a band like "9–10"
}

export interface KeySection {
  heading?: string;
  rows: KeyRow[];
  subtotal?: number;
}

export interface SAQuestion {
  letter: 'a' | 'b' | 'c';
  text: string;
  marks: number;
  key: KeySection[];
  notes: string; // markers' notes
}

export interface SourceSet {
  id: string;
  title: string;          // teacher-facing label
  themeKey: string;       // used to avoid essay-set collisions
  themeSentence: string;  // the one-sentence linking theme (manual §6.4 step 2)
  tags: SyllabusPointId[];
  era: Era;
  split: '3+7' | '4+6';
  sources: SourceDoc[];
  questions: [SAQuestion, SAQuestion, SAQuestion];
}

export type Frame = 'E1' | 'E2' | 'E3' | 'E4' | 'E5' | 'E6' | 'E7' | 'E8' | 'E9' | 'E10';
export type Strand = 'event' | 'idea' | 'person' | 'structure' | 'group';

export interface EssayQuestion {
  id: string;
  frame: Frame;
  strand: Strand;
  era: Era;
  demand: 1 | 2 | 3;      // difficulty, for balancing sets
  themes: string[];       // themeKeys this question would collide with
  tags: SyllabusPointId[];
  text: string;
  notes: string;          // markers' notes
}

// ---- Attempts ----

export interface Answers {
  a: string;
  b: string;
  c: string;
}

export type AttemptStatus = 'in-progress' | 'submitted';

export interface Attempt {
  id: string;
  studentUid: string;
  studentName: string;
  classId: string;
  classCode: string;
  createdAt: number;
  updatedAt: number;
  submittedAt: number | null;
  status: AttemptStatus;
  syllabusPoints: SyllabusPointId[];
  sourceSetId: string;
  essayIds: string[];
  answers: Answers;
  essayChoice: number | null; // index into essayIds
  essayText: string;
  page: 1 | 2;
}

export interface StudentProfile {
  uid: string;
  name: string;
  classId: string;
  classCode: string;
  createdAt: number;
  lastActiveAt: number;
}

export interface ClassInfo {
  id: string;
  name: string;
  code: string;
  createdAt: number;
}
