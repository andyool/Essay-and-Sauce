// Core data model for the question bank and student attempts.

/** The four electives the app covers, one per semester of study. */
export type UnitId = 'capitalism' | 'nazism' | 'russia' | 'europe';

/** Syllabus dot-point ids are namespaced per unit: the original Nazism points
 *  keep their unprefixed ids ('p1'…'p6', 'i-hitler'…), newer units prefix
 *  theirs ('cap-p1', 'rus-p3', 'cap-i-ford', …). */
export type SyllabusPointId = string;

export interface SyllabusPoint {
  id: SyllabusPointId;
  short: string; // checkbox label
  full: string;  // full syllabus wording
  sub?: string[];
}

export type Era = 'early' | 'mid' | 'late' | 'whole';

export interface SourceImage {
  /** Path under public/, e.g. 'sources/boycott-1933.jpg' */
  src: string;
  alt: string;
  /** Attribution/credit line shown in small print under the image. */
  credit: string;
}

export interface SourceDoc {
  n: 1 | 2 | 3;
  kind: 'visual' | 'text';
  attribution: string;
  body: string;          // extract text, or a description of the visual source
  image?: SourceImage;   // the visual itself, when available
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

/** One section of a paper. A paper is any combination of source-analysis and
 *  essay sections, possibly drawn from different units. */
export interface SourceSection {
  kind: 'source';
  unit: UnitId;
  sourceSetId: string;
  answers: Answers;
}

export interface EssaySection {
  kind: 'essay';
  unit: UnitId;
  essayIds: string[];
  essayChoice: number | null; // index into essayIds
  essayText: string;
}

export type AttemptSection = SourceSection | EssaySection;

export type AttemptStatus = 'in-progress' | 'submitted';

/** Key into one markable part of an attempt: 's{section}{part}', e.g. 's1a'
 *  is question (a) of the first section, 's3e' the essay of the third.
 *  Feedback saved before papers had sections used bare keys ('a', 'b', 'c',
 *  'essay'); upgradeAttempt() rewrites those on load. */
export type FeedbackPart = string;

/** Teacher marking for a submitted attempt. Hidden from the student until
 *  returnedAt is set. */
export interface TeacherFeedback {
  marks: Record<FeedbackPart, number | null>;
  comments: Record<FeedbackPart, string>;
  /** Which rows of the marking key were clicked, so the teacher's working
   *  reappears when they come back to an attempt. One entry per row of the
   *  key, numbered straight through its sections (see lib/marking.ts): the
   *  marks awarded by that row, or null where it was not awarded. Absent on
   *  feedback saved before the key became clickable. */
  picks?: Record<FeedbackPart, (number | null)[]>;
  overall: string;
  returnedAt: number | null;
  updatedAt: number;
}

// ---- Exam timing ----

/** How the clock behaves during an attempt.
 *  'off'      — no countdown; working time is still measured, for information.
 *  'practice' — countdown the student may pause, and which runs into overtime
 *               rather than stopping them.
 *  'strict'   — exam conditions: no pausing, and the paper is submitted
 *               automatically the moment the time runs out. */
export type TimerMode = 'off' | 'practice' | 'strict';

/** The clock for one attempt. It only runs while the student has the exam
 *  open and has started it: `elapsedMs` banks the time from earlier runs and
 *  `runningSince` marks the start of the current one. */
export interface ExamTiming {
  mode: TimerMode;
  /** Total working time allowed, in minutes (0 when the mode is 'off'). */
  totalMinutes: number;
  /** Legacy: suggested minutes for Section One of a two-section paper.
   *  Suggested section times are now computed from the paper's marks. */
  sectionOneMinutes?: number;
  /** When the student first started the clock; null until they do. */
  startedAt: number | null;
  /** Working time banked from earlier runs, in ms. */
  elapsedMs: number;
  /** When the current run started, or null while the clock is stopped. */
  runningSince: number | null;
  /** When the countdown first reached zero. */
  expiredAt: number | null;
  /** True when strict mode submitted the paper on the student's behalf. */
  autoSubmitted: boolean;
}

export interface Attempt {
  id: string;
  studentUid: string;
  /** See StudentProfile.studentKey. Older attempts may lack this field. */
  studentKey?: string;
  studentName: string;
  classId: string;
  classCode: string;
  createdAt: number;
  updatedAt: number;
  submittedAt: number | null;
  status: AttemptStatus;
  syllabusPoints: SyllabusPointId[];
  /** The paper, section by section. Attempts made before papers had sections
   *  stored the two fixed sections in the legacy fields below; upgradeAttempt()
   *  (lib/paper.ts) rebuilds them into this form on load. */
  sections: AttemptSection[];
  /** The section of the paper currently open, 1-based. */
  page: number;
  /** The clock for this attempt. Absent on attempts made before timing
   *  existed, which are treated as untimed. */
  timing?: ExamTiming;
  /** Present once the teacher has started marking this attempt. */
  feedback?: TeacherFeedback;

  // ---- legacy single-elective paper fields (pre-units attempts) ----
  sourceSetId?: string;
  essayIds?: string[];
  answers?: Answers;
  essayChoice?: number | null;
  essayText?: string;
}

export interface StudentProfile {
  uid: string;
  name: string;
  classId: string;
  classCode: string;
  /** Year level of the class joined (11 or 12). Profiles created before year
   *  levels existed lack this; treat as 11. */
  yearLevel?: 11 | 12;
  /** Stable identity: class + normalised name. Lets a student reconnect to
   *  their work after signing out or switching devices. */
  studentKey: string;
  /** Hash of the student's 4-digit PIN (chosen at first sign-in), salted with
   *  the studentKey. Profiles created before PINs existed lack this. */
  pinHash?: string;
  createdAt: number;
  lastActiveAt: number;
}

/** The claim on a name within a class: created the first time the name is
 *  used, it locks the name to the PIN chosen then. Lives in its own
 *  collection (doc id = studentKey) so later sign-ins can be checked. */
export interface Identity {
  studentKey: string;
  name: string;
  classCode: string;
  pinHash: string;
  createdAt: number;
}

export interface ClassInfo {
  id: string;
  name: string;
  code: string;
  /** 11 or 12 — decides which two units the class's papers draw on. Classes
   *  created before year levels existed lack this; treat as 11. */
  yearLevel?: 11 | 12;
  createdAt: number;
}
