import type { Attempt, ClassInfo, StudentProfile } from '../data/types';
import type { Store, Unsubscribe } from './types';

// LocalStore: single-browser fallback used until Firebase is configured.
// Data lives in localStorage; "live" subscriptions poll storage so that two
// tabs on the same machine still update each other.

const KEY_STUDENT = 'eas.student';
const KEY_ATTEMPTS = 'eas.attempts';
const KEY_CLASSES = 'eas.classes';

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readAttempts(): Record<string, Attempt> {
  return read<Record<string, Attempt>>(KEY_ATTEMPTS, {});
}

export class LocalStore implements Store {
  readonly mode = 'local' as const;
  private teacher = false;

  async awaitAuthReady(): Promise<void> {
    // Nothing to restore in local mode.
  }

  async joinClass(name: string, classCode: string): Promise<StudentProfile> {
    const code = classCode.trim().toUpperCase();
    const classes = read<ClassInfo[]>(KEY_CLASSES, []);
    let cls = classes.find((c) => c.code === code);
    if (!cls) {
      cls = { id: 'local-' + code, name: 'Class ' + code, code, createdAt: Date.now() };
      classes.push(cls);
      write(KEY_CLASSES, classes);
    }
    const existing = read<StudentProfile | null>(KEY_STUDENT, null);
    const profile: StudentProfile = {
      uid: existing?.uid ?? 'local-' + Math.random().toString(36).slice(2, 10),
      name: name.trim(),
      classId: cls.id,
      classCode: code,
      createdAt: existing?.createdAt ?? Date.now(),
      lastActiveAt: Date.now(),
    };
    write(KEY_STUDENT, profile);
    return profile;
  }

  async getCurrentStudent(): Promise<StudentProfile | null> {
    return read<StudentProfile | null>(KEY_STUDENT, null);
  }

  async signOutStudent(): Promise<void> {
    localStorage.removeItem(KEY_STUDENT);
  }

  async listMyAttempts(uid: string): Promise<Attempt[]> {
    return Object.values(readAttempts())
      .filter((a) => a.studentUid === uid)
      .sort((a, b) => b.createdAt - a.createdAt);
  }

  async getAttempt(id: string): Promise<Attempt | null> {
    return readAttempts()[id] ?? null;
  }

  async createAttempt(attempt: Attempt): Promise<void> {
    const all = readAttempts();
    all[attempt.id] = attempt;
    write(KEY_ATTEMPTS, all);
  }

  async updateAttempt(id: string, patch: Partial<Attempt>): Promise<void> {
    const all = readAttempts();
    const cur = all[id];
    if (!cur) return;
    all[id] = { ...cur, ...patch, updatedAt: Date.now() };
    write(KEY_ATTEMPTS, all);
  }

  async deleteAttempt(id: string): Promise<void> {
    const all = readAttempts();
    delete all[id];
    write(KEY_ATTEMPTS, all);
  }

  subscribeAttempt(id: string, cb: (a: Attempt | null) => void): Unsubscribe {
    cb(readAttempts()[id] ?? null);
    const timer = window.setInterval(() => cb(readAttempts()[id] ?? null), 2000);
    return () => window.clearInterval(timer);
  }

  async teacherSignIn(): Promise<void> {
    this.teacher = true;
  }

  async teacherSignOut(): Promise<void> {
    this.teacher = false;
  }

  isTeacherSignedIn(): boolean {
    return this.teacher;
  }

  async listClasses(): Promise<ClassInfo[]> {
    return read<ClassInfo[]>(KEY_CLASSES, []);
  }

  async createClass(name: string): Promise<ClassInfo> {
    const classes = read<ClassInfo[]>(KEY_CLASSES, []);
    const code = Math.random().toString(36).slice(2, 7).toUpperCase();
    const cls: ClassInfo = { id: 'local-' + code, name, code, createdAt: Date.now() };
    classes.push(cls);
    write(KEY_CLASSES, classes);
    return cls;
  }

  async listStudents(): Promise<StudentProfile[]> {
    const s = read<StudentProfile | null>(KEY_STUDENT, null);
    return s ? [s] : [];
  }

  async listAllAttempts(): Promise<Attempt[]> {
    return Object.values(readAttempts()).sort((a, b) => b.createdAt - a.createdAt);
  }

  subscribeActiveAttempts(cb: (attempts: Attempt[]) => void): Unsubscribe {
    const emit = () =>
      cb(
        Object.values(readAttempts())
          .filter((a) => a.status === 'in-progress')
          .sort((a, b) => b.updatedAt - a.updatedAt),
      );
    emit();
    const timer = window.setInterval(emit, 2000);
    return () => window.clearInterval(timer);
  }
}
