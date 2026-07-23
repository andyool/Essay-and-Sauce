import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
  type Firestore,
} from 'firebase/firestore';
import type { Attempt, ClassInfo, StudentProfile } from '../data/types';
import { TEACHER_EMAILS } from './firebaseConfig';
import type { Store, Unsubscribe } from './types';

// CloudStore: Firestore-backed implementation.
//  - Students sign in anonymously; their profile lives at students/{uid}.
//  - The teacher signs in with email/password; security rules grant that
//    email read access to everything.
//  - Every operation waits for the initial auth state to restore first, and
//    the CURRENT auth user is always read live from the SDK (never cached),
//    so sign-ins during the session are seen immediately.

export class CloudStore implements Store {
  readonly mode = 'cloud' as const;
  private db: Firestore;
  private auth;
  /** Resolves once Firebase has restored (or established) the initial auth state. */
  private initialAuth: Promise<void>;

  constructor(config: Record<string, string>) {
    const app = initializeApp(config);
    this.db = getFirestore(app);
    this.auth = getAuth(app);
    this.initialAuth = new Promise((resolve) => {
      const un = onAuthStateChanged(this.auth, () => {
        un();
        resolve();
      });
    });
  }

  async awaitAuthReady(): Promise<void> {
    await this.initialAuth;
  }

  /** The live current user, after the initial auth state has restored. */
  private async user(): Promise<User | null> {
    await this.initialAuth;
    return this.auth.currentUser;
  }

  private async ensureAnonAuth(): Promise<User> {
    const existing = await this.user();
    if (existing) return existing;
    const cred = await signInAnonymously(this.auth);
    return cred.user;
  }

  // ---- student session ----

  async joinClass(name: string, classCode: string): Promise<StudentProfile> {
    const user = await this.ensureAnonAuth();
    const code = classCode.trim().toUpperCase();
    const q = query(collection(this.db, 'classes'), where('code', '==', code));
    const snap = await getDocs(q);
    if (snap.empty) {
      throw new Error('No class found with code "' + code + '". Check the code with your teacher.');
    }
    const clsDoc = snap.docs[0];
    const existing = await getDoc(doc(this.db, 'students', user.uid));
    const profile: StudentProfile = {
      uid: user.uid,
      name: name.trim(),
      classId: clsDoc.id,
      classCode: code,
      createdAt: existing.exists() ? (existing.data() as StudentProfile).createdAt : Date.now(),
      lastActiveAt: Date.now(),
    };
    await setDoc(doc(this.db, 'students', user.uid), profile);
    return profile;
  }

  async getCurrentStudent(): Promise<StudentProfile | null> {
    const user = await this.user();
    if (!user || !user.isAnonymous) return null;
    const snap = await getDoc(doc(this.db, 'students', user.uid));
    return snap.exists() ? (snap.data() as StudentProfile) : null;
  }

  async signOutStudent(): Promise<void> {
    await signOut(this.auth);
  }

  // ---- attempts ----

  async listMyAttempts(uid: string): Promise<Attempt[]> {
    await this.initialAuth;
    const q = query(collection(this.db, 'attempts'), where('studentUid', '==', uid));
    const snap = await getDocs(q);
    return snap.docs.map((d) => d.data() as Attempt).sort((a, b) => b.createdAt - a.createdAt);
  }

  async getAttempt(id: string): Promise<Attempt | null> {
    await this.initialAuth;
    const snap = await getDoc(doc(this.db, 'attempts', id));
    return snap.exists() ? (snap.data() as Attempt) : null;
  }

  async createAttempt(attempt: Attempt): Promise<void> {
    await this.initialAuth;
    await setDoc(doc(this.db, 'attempts', attempt.id), attempt);
  }

  async updateAttempt(id: string, patch: Partial<Attempt>): Promise<void> {
    await this.initialAuth;
    const clean: Record<string, unknown> = { updatedAt: Date.now() };
    for (const [k, v] of Object.entries(patch)) {
      clean[k] = v === undefined ? deleteField() : v;
    }
    await updateDoc(doc(this.db, 'attempts', id), clean);
  }

  async deleteAttempt(id: string): Promise<void> {
    await this.initialAuth;
    await deleteDoc(doc(this.db, 'attempts', id));
  }

  subscribeAttempt(id: string, cb: (a: Attempt | null) => void): Unsubscribe {
    let inner: Unsubscribe | null = null;
    let cancelled = false;
    void this.initialAuth.then(() => {
      if (cancelled) return;
      inner = onSnapshot(doc(this.db, 'attempts', id), (snap) => {
        cb(snap.exists() ? (snap.data() as Attempt) : null);
      });
    });
    return () => {
      cancelled = true;
      if (inner) inner();
    };
  }

  // ---- teacher ----

  async teacherSignIn(email: string, password: string): Promise<void> {
    await this.initialAuth;
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async teacherSignOut(): Promise<void> {
    await signOut(this.auth);
  }

  isTeacherSignedIn(): boolean {
    const user = this.auth.currentUser;
    return !!user && !user.isAnonymous && !!user.email && TEACHER_EMAILS.includes(user.email);
  }

  async listClasses(): Promise<ClassInfo[]> {
    await this.initialAuth;
    const snap = await getDocs(collection(this.db, 'classes'));
    return snap.docs
      .map((d) => ({ ...(d.data() as ClassInfo), id: d.id }))
      .sort((a, b) => a.createdAt - b.createdAt);
  }

  async createClass(name: string): Promise<ClassInfo> {
    await this.initialAuth;
    const code = Math.random().toString(36).replace(/[^a-z0-9]/g, '').slice(0, 5).toUpperCase();
    const id = 'class-' + code;
    const cls: ClassInfo = { id, name, code, createdAt: Date.now() };
    await setDoc(doc(this.db, 'classes', id), cls);
    return cls;
  }

  async listStudents(): Promise<StudentProfile[]> {
    await this.initialAuth;
    const snap = await getDocs(collection(this.db, 'students'));
    return snap.docs
      .map((d) => d.data() as StudentProfile)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async listAllAttempts(): Promise<Attempt[]> {
    await this.initialAuth;
    const snap = await getDocs(collection(this.db, 'attempts'));
    return snap.docs.map((d) => d.data() as Attempt).sort((a, b) => b.createdAt - a.createdAt);
  }

  subscribeActiveAttempts(cb: (attempts: Attempt[]) => void): Unsubscribe {
    let inner: Unsubscribe | null = null;
    let cancelled = false;
    void this.initialAuth.then(() => {
      if (cancelled) return;
      const q = query(collection(this.db, 'attempts'), where('status', '==', 'in-progress'));
      inner = onSnapshot(q, (snap) => {
        cb(snap.docs.map((d) => d.data() as Attempt).sort((a, b) => b.updatedAt - a.updatedAt));
      });
    });
    return () => {
      cancelled = true;
      if (inner) inner();
    };
  }
}
