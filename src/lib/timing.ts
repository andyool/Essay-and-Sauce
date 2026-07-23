import type { AttemptStatus, ExamTiming, TimerMode } from '../data/types';

// The exam clock.
//
// A clock runs only while the student has the exam page open and has pressed
// start. `elapsedMs` banks the working time from earlier runs; `runningSince`
// is the start of the current one. Everything else (remaining, overtime, time
// away) is derived, so the two numbers are all that is ever stored.

/** How often a running clock is written back — and therefore the most working
 *  time a browser crash can cost. */
export const HEARTBEAT_MS = 30_000;

/** Reopening an exam whose clock is still marked as running means it was not
 *  closed cleanly (crash, flat battery, killed tab). At most this much of the
 *  gap counts as working time; the rest counts as time away. */
export const CRASH_GRACE_MS = 60_000;

/** Working-time options, in minutes. */
export const DURATION_MINUTES = [60, 90, 120, 150, 180] as const;

/** Half a three-hour paper, for a paper of half the length. */
export const DEFAULT_DURATION = 90;

const SECTION_ONE_MARKS = 20;
const PAPER_MARKS = 50;

/** Time for Section One, pro rata on marks and rounded to five minutes. */
export function suggestedSectionOne(totalMinutes: number): number {
  return Math.round((totalMinutes * SECTION_ONE_MARKS) / PAPER_MARKS / 5) * 5;
}

export function newTiming(mode: TimerMode, totalMinutes: number): ExamTiming {
  const total = mode === 'off' ? 0 : totalMinutes;
  return {
    mode,
    totalMinutes: total,
    sectionOneMinutes: mode === 'off' ? 0 : suggestedSectionOne(total),
    startedAt: null,
    elapsedMs: 0,
    runningSince: null,
    expiredAt: null,
    autoSubmitted: false,
  };
}

export function limitMs(t: ExamTiming): number {
  return t.totalMinutes * 60_000;
}

/** Working time used so far, including the run in progress. */
export function elapsed(t: ExamTiming, now = Date.now()): number {
  const current = t.runningSince === null ? 0 : Math.max(0, now - t.runningSince);
  return t.elapsedMs + current;
}

/** Working time left; negative once the student is into overtime. Untimed
 *  papers never run out. */
export function remaining(t: ExamTiming, now = Date.now()): number {
  if (t.mode === 'off') return Number.POSITIVE_INFINITY;
  return limitMs(t) - elapsed(t, now);
}

export function isRunning(t: ExamTiming): boolean {
  return t.runningSince !== null;
}

/** Real time between starting and finishing that was NOT working time: the
 *  exam was closed and picked up again later. Null while still in progress. */
export function timeAway(t: ExamTiming, endedAt: number | null): number | null {
  if (t.startedAt === null || endedAt === null) return null;
  return Math.max(0, endedAt - t.startedAt - t.elapsedMs);
}

/** Bring a stored clock up to date when the exam is opened. A clock still
 *  marked as running was not stopped cleanly, so only the grace period counts.
 *  Timed papers then wait for the student to press start or resume; untimed
 *  ones simply carry on measuring. Returns the same object when nothing
 *  changed. */
export function reopenTiming(t: ExamTiming | undefined, now = Date.now()): ExamTiming | null {
  if (!t) return null;
  let next = t;
  if (t.runningSince !== null) {
    const credited = Math.min(Math.max(0, now - t.runningSince), CRASH_GRACE_MS);
    next = { ...next, elapsedMs: next.elapsedMs + credited, runningSince: null };
  }
  if (next.mode === 'off') {
    next = { ...next, startedAt: next.startedAt ?? now, runningSince: now };
  }
  return next;
}

/** Start (or resume) the clock. */
export function startTiming(t: ExamTiming, now = Date.now()): ExamTiming {
  if (t.runningSince !== null) return t;
  return { ...t, startedAt: t.startedAt ?? now, runningSince: now };
}

/** Stop the clock, banking the time from the current run. */
export function stopTiming(t: ExamTiming, now = Date.now()): ExamTiming {
  if (t.runningSince === null) return t;
  return { ...t, elapsedMs: elapsed(t, now), runningSince: null };
}

// ---- formatting ----

const pad = (n: number) => String(n).padStart(2, '0');

/** Countdown face: "1:23:45", or "23:45" under an hour. */
export function clock(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

/** Rounded prose length: "1 h 12 m", "12 min", "under a minute". */
export function shortDuration(ms: number): string {
  const mins = Math.round(Math.max(0, ms) / 60_000);
  if (mins < 1) return 'under a minute';
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return m + ' min';
  return m === 0 ? h + ' h' : h + ' h ' + m + ' m';
}

/** Spelt-out length of a paper: "1 hour 30 minutes". */
export function describeDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const parts: string[] = [];
  if (h > 0) parts.push(h + (h === 1 ? ' hour' : ' hours'));
  if (m > 0) parts.push(m + ' minutes');
  return parts.join(' ') || '0 minutes';
}

export function modeLabel(mode: TimerMode): string {
  return mode === 'strict' ? 'Exam conditions' : mode === 'practice' ? 'Practice timer' : 'Untimed';
}

export function modeBlurb(mode: TimerMode): string {
  if (mode === 'strict') {
    return 'The clock cannot be paused, and the paper is submitted automatically the moment the time runs out.';
  }
  if (mode === 'practice') {
    return 'You can pause the clock, and it keeps counting past zero rather than stopping you — so you can see how much extra time you needed.';
  }
  return 'No countdown. Your working time is still measured so you can see how long the paper took.';
}

/** One-line summary for lists and cards. */
export function timingBrief(t: ExamTiming, status: AttemptStatus, now = Date.now()): string {
  if (status === 'submitted') {
    const used = shortDuration(t.elapsedMs) + ' used';
    if (t.autoSubmitted) return used + ' · time ran out';
    if (t.mode === 'off') return used;
    return used + ' of ' + shortDuration(limitMs(t));
  }
  if (t.mode === 'off') return shortDuration(elapsed(t, now)) + ' used';
  const left = remaining(t, now);
  if (left <= 0) return 'time up';
  const label = shortDuration(left) + ' left';
  return t.runningSince === null ? label + ' (paused)' : label;
}
