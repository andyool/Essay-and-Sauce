import type { TeacherFeedback } from '../data/types';

export function fmtDate(ts: number): string {
  return new Date(ts).toLocaleString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function timeAgo(ts: number): string {
  const s = Math.max(0, Math.round((Date.now() - ts) / 1000));
  if (s < 10) return 'just now';
  if (s < 60) return s + 's ago';
  const m = Math.floor(s / 60);
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h ago';
  const d = Math.floor(h / 24);
  return d + 'd ago';
}

export function wordCount(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

/** Stable student identity: class + normalised name ("  Alex  NGUYEN " → "alex nguyen"). */
export function makeStudentKey(classId: string, name: string): string {
  const norm = name.trim().toLowerCase().replace(/\s+/g, ' ');
  return classId + '|' + norm;
}

/** Sum of the marks entered so far (unmarked parts count as 0). */
export function feedbackTotal(f: TeacherFeedback): number {
  return (f.marks.a ?? 0) + (f.marks.b ?? 0) + (f.marks.c ?? 0) + (f.marks.essay ?? 0);
}

/** True once every part (a, b, c and the essay) has a mark. */
export function feedbackComplete(f: TeacherFeedback): boolean {
  return (
    f.marks.a !== null && f.marks.b !== null && f.marks.c !== null && f.marks.essay !== null
  );
}

export function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
}
