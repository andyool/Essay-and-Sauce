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

/** True when the text is a usable PIN: exactly four digits. */
export function isValidPin(pin: string): boolean {
  return /^\d{4}$/.test(pin);
}

/** Hash of a PIN, salted with the student's identity so equal PINs don't
 *  produce equal hashes across students. SHA-256, hex-encoded. */
export async function hashPin(pin: string, studentKey: string): Promise<string> {
  const data = new TextEncoder().encode('eas-pin|' + studentKey + '|' + pin);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Suggested word range for each answer, scaled to its marks. */
export function wordTarget(part: 'a' | 'b' | 'c' | 'essay', marks: number): [number, number] {
  if (part === 'essay') return [700, 1100];
  if (part === 'c') return [250, 450];
  if (part === 'b') return marks >= 7 ? [150, 280] : [120, 240];
  return marks >= 4 ? [80, 160] : [60, 130];
}

/** How the live counter should read against its target range. */
export function wordZone(words: number, [lo, hi]: [number, number]): 'low' | 'good' | 'high' {
  if (words < lo) return 'low';
  if (words <= hi * 1.25) return 'good';
  return 'high';
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
