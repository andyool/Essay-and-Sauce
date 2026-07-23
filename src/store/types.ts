import type { Attempt, ClassInfo, StudentProfile } from '../data/types';

export type Unsubscribe = () => void;

export interface Store {
  readonly mode: 'local' | 'cloud';

  // ---- student session ----
  /** Join (or rejoin) a class; creates/updates the student profile. */
  joinClass(name: string, classCode: string): Promise<StudentProfile>;
  getCurrentStudent(): Promise<StudentProfile | null>;
  signOutStudent(): Promise<void>;

  // ---- attempts ----
  listMyAttempts(uid: string): Promise<Attempt[]>;
  getAttempt(id: string): Promise<Attempt | null>;
  createAttempt(attempt: Attempt): Promise<void>;
  updateAttempt(id: string, patch: Partial<Attempt>): Promise<void>;
  /** Permanently delete an attempt (students: own attempts; teacher: any). */
  deleteAttempt(id: string): Promise<void>;
  subscribeAttempt(id: string, cb: (a: Attempt | null) => void): Unsubscribe;

  // ---- teacher ----
  teacherSignIn(email: string, password: string): Promise<void>;
  teacherSignOut(): Promise<void>;
  isTeacherSignedIn(): boolean;
  listClasses(): Promise<ClassInfo[]>;
  createClass(name: string): Promise<ClassInfo>;
  listStudents(): Promise<StudentProfile[]>;
  listAllAttempts(): Promise<Attempt[]>;
  /** Live view: all in-progress attempts, updating in near-realtime. */
  subscribeActiveAttempts(cb: (attempts: Attempt[]) => void): Unsubscribe;
}
