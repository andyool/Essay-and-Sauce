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
import type { Attempt, ClassInfo, Identity, StudentProfile } from '../data/types';
import { hashPin, makeStudentKey } from '../lib/format';
import { TEACHER_EMAILS } from './firebaseConfig';
import type { Store, Unsubscribe } from './types';

// A student "signing out" should not destroy their anonymous Firebase session
// (it can never be signed back into). Instead we set this flag and keep the
// session; rejoining with the same name reuses it, while a different name
// rotates to a fresh session so shared devices stay separate.
const KEY_SOFT_SIGNOUT = 'eas.studentSignedOut';

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
  /** Additional teacher emails from config/teachers, loaded after sign-in. */
  private extraTeachers: string[] = [];

  constructor(config: Record<string, string>) {
    const app = initializeApp(config);
    this.db = getFirestore(app);
    this.auth = getAuth(app);
    this.initialAuth = new Promise((resolve) => {
      const un = onAuthStateChanged(this.auth, (user) => {
        un();
        // A restored teacher session may belong to a dashboard-added teacher;
        // fetch the list before anyone asks isTeacherSignedIn().
        if (user && !user.isAnonymous) {
          void this.loadExtraTeachers().finally(resolve);
        } else {
          resolve();
        }
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

  async joinClass(name: string, classCode: string, pin: string): Promise<StudentProfile> {
    const code = classCode.trim().toUpperCase();
    let user = await this.ensureAnonAuth();
    const q = query(collection(this.db, 'classes'), where('code', '==', code));
    const snap = await getDocs(q);
    if (snap.empty) {
      throw new Error('No class found with code "' + code + '". Check the code with your teacher.');
    }
    const clsDoc = snap.docs[0];
    const studentKey = makeStudentKey(clsDoc.id, name);
    const pinHash = await hashPin(pin, studentKey);

    // The first sign-in under a name claims it with this PIN; afterwards the
    // claim guards the name, so a classmate typing the same name without the
    // PIN cannot open this student's work.
    const identityRef = doc(this.db, 'identities', studentKey);
    const claim = await getDoc(identityRef);
    if (claim.exists()) {
      if ((claim.data() as Identity).pinHash !== pinHash) {
        throw new Error(
          'Wrong PIN for this name. Enter the 4-digit PIN chosen the first time this name signed in, or ask your teacher to reset it.',
        );
      }
    } else {
      const identity: Identity = {
        studentKey,
        name: name.trim(),
        classCode: code,
        pinHash,
        createdAt: Date.now(),
      };
      await setDoc(identityRef, identity);
    }

    // If this browser's session belongs to a DIFFERENT student (another name),
    // rotate to a fresh anonymous session so identities stay separate on
    // shared devices. Same name → keep the session and its work.
    const existing = await getDoc(doc(this.db, 'students', user.uid));
    if (existing.exists()) {
      const prev = existing.data() as StudentProfile;
      const prevKey = prev.studentKey ?? makeStudentKey(prev.classId, prev.name);
      if (prevKey !== studentKey) {
        await signOut(this.auth);
        user = (await signInAnonymously(this.auth)).user;
      }
    }

    const fresh = await getDoc(doc(this.db, 'students', user.uid));
    const profile: StudentProfile = {
      uid: user.uid,
      name: name.trim(),
      classId: clsDoc.id,
      classCode: code,
      studentKey,
      pinHash,
      createdAt: fresh.exists() ? (fresh.data() as StudentProfile).createdAt : Date.now(),
      lastActiveAt: Date.now(),
    };
    await setDoc(doc(this.db, 'students', user.uid), profile);
    localStorage.removeItem(KEY_SOFT_SIGNOUT);
    return profile;
  }

  async getCurrentStudent(): Promise<StudentProfile | null> {
    if (localStorage.getItem(KEY_SOFT_SIGNOUT)) return null;
    const user = await this.user();
    if (!user || !user.isAnonymous) return null;
    const snap = await getDoc(doc(this.db, 'students', user.uid));
    if (!snap.exists()) return null;
    const profile = snap.data() as StudentProfile;
    // Backfill the stable identity on profiles created before it existed.
    // (The write may be refused under PIN-era rules; the local copy is
    // enough until the student next signs in properly.)
    if (!profile.studentKey) {
      profile.studentKey = makeStudentKey(profile.classId, profile.name);
      try {
        await setDoc(doc(this.db, 'students', user.uid), profile);
      } catch {
        /* rules require a PIN claim; joinClass will set one */
      }
    }
    return profile;
  }

  async signOutStudent(): Promise<void> {
    const user = await this.user();
    if (user && !user.isAnonymous) {
      await signOut(this.auth);
      return;
    }
    // Keep the anonymous session so the same student can reconnect;
    // just hide the signed-in state until the next join.
    localStorage.setItem(KEY_SOFT_SIGNOUT, '1');
  }

  // ---- attempts ----

  async listMyAttempts(student: StudentProfile): Promise<Attempt[]> {
    await this.initialAuth;
    const byId = new Map<string, Attempt>();
    const uidSnap = await getDocs(
      query(collection(this.db, 'attempts'), where('studentUid', '==', student.uid)),
    );
    for (const d of uidSnap.docs) byId.set(d.id, d.data() as Attempt);
    // Work from earlier sessions/devices, found via the stable identity. This
    // query needs the updated security rules; tolerate denial until then.
    try {
      const keySnap = await getDocs(
        query(collection(this.db, 'attempts'), where('studentKey', '==', student.studentKey)),
      );
      for (const d of keySnap.docs) byId.set(d.id, d.data() as Attempt);
    } catch {
      /* rules not updated yet — same-session attempts still listed above */
    }
    return [...byId.values()].sort((a, b) => b.createdAt - a.createdAt);
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
    await this.loadExtraTeachers();
  }

  async teacherSignOut(): Promise<void> {
    await signOut(this.auth);
  }

  /** Teachers beyond the built-in list live in config/teachers, editable
   *  from the dashboard so a colleague can be added without code changes. */
  private async loadExtraTeachers(): Promise<void> {
    try {
      const snap = await getDoc(doc(this.db, 'config', 'teachers'));
      this.extraTeachers = snap.exists() ? ((snap.data().emails as string[]) ?? []) : [];
    } catch {
      this.extraTeachers = [];
    }
  }

  isTeacherSignedIn(): boolean {
    const user = this.auth.currentUser;
    return (
      !!user &&
      !user.isAnonymous &&
      !!user.email &&
      (TEACHER_EMAILS.includes(user.email) || this.extraTeachers.includes(user.email))
    );
  }

  async listExtraTeachers(): Promise<string[]> {
    await this.loadExtraTeachers();
    return this.extraTeachers;
  }

  async setExtraTeachers(emails: string[]): Promise<void> {
    await this.initialAuth;
    await setDoc(doc(this.db, 'config', 'teachers'), { emails });
    this.extraTeachers = emails;
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

  subscribeStudents(cb: (students: StudentProfile[]) => void): Unsubscribe {
    let inner: Unsubscribe | null = null;
    let cancelled = false;
    void this.initialAuth.then(() => {
      if (cancelled) return;
      inner = onSnapshot(collection(this.db, 'students'), (snap) => {
        cb(
          snap.docs
            .map((d) => d.data() as StudentProfile)
            .sort((a, b) => a.name.localeCompare(b.name)),
        );
      });
    });
    return () => {
      cancelled = true;
      if (inner) inner();
    };
  }

  async deleteStudents(uids: string[], studentKeys?: string[]): Promise<void> {
    await this.initialAuth;
    await Promise.all(uids.map((uid) => deleteDoc(doc(this.db, 'students', uid))));
    // Release the name-PIN claims too (tolerate failure until rules updated).
    for (const key of studentKeys ?? []) {
      try {
        await deleteDoc(doc(this.db, 'identities', key));
      } catch {
        /* rules not updated yet */
      }
    }
  }

  async resetStudentPin(studentKey: string): Promise<void> {
    await this.initialAuth;
    await deleteDoc(doc(this.db, 'identities', studentKey));
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
