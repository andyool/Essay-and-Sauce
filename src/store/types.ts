import type { Attempt, ClassInfo, StudentProfile } from '../data/types';

export type Unsubscribe = () => void;

export interface Store {
  readonly mode: 'local' | 'cloud';

  /** Resolves once any persisted sign-in has been restored (no-op locally). */
  awaitAuthReady(): Promise<void>;

  // ---- student session ----
  /** Join (or rejoin) a class. The first sign-in under a name claims it with
   *  the given 4-digit PIN; later sign-ins must present the same PIN. */
  joinClass(name: string, classCode: string, pin: string): Promise<StudentProfile>;
  getCurrentStudent(): Promise<StudentProfile | null>;
  signOutStudent(): Promise<void>;

  // ---- attempts ----
  listMyAttempts(student: StudentProfile): Promise<Attempt[]>;
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
  /** Live class roster: fires straight away, then again whenever a student
   *  joins a class or rejoins on another device. */
  subscribeStudents(cb: (students: StudentProfile[]) => void): Unsubscribe;
  /** Take a student off the roster. One student can hold several profile
   *  rows — one per sign-in — so this takes every uid behind that name.
   *  Also releases the students' name-PIN claims so the names can be
   *  re-used with a fresh PIN. */
  deleteStudents(uids: string[], studentKeys?: string[]): Promise<void>;
  /** Forget the PIN locked to a name, so the student can choose a new one
   *  at their next sign-in. */
  resetStudentPin(studentKey: string): Promise<void>;
  /** Additional teacher email addresses, managed from the dashboard and
   *  stored alongside the data (empty in local mode). */
  listExtraTeachers(): Promise<string[]>;
  setExtraTeachers(emails: string[]): Promise<void>;
  listAllAttempts(): Promise<Attempt[]>;
  /** Live view: all in-progress attempts, updating in near-realtime. */
  subscribeActiveAttempts(cb: (attempts: Attempt[]) => void): Unsubscribe;
}
