import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ConfirmDialog } from '../components/Feedback';
import { getSourceSet } from '../data/bank';
import type { Attempt, ClassInfo, StudentProfile } from '../data/types';
import { feedbackComplete, feedbackTotal, fmtDate, timeAgo, wordCount } from '../lib/format';
import { elapsed, modeLabel, remaining, timingBrief } from '../lib/timing';
import { getStore } from '../store';
import { TEACHER_EMAILS } from '../store/firebaseConfig';

type Tab = 'live' | 'students' | 'attempts' | 'classes';

/** A student profile row joined a class less than this ago counts as new. */
const JUST_JOINED_MS = 10 * 60 * 1000;

function latestSnippet(a: Attempt): string {
  if (a.page === 2 && a.essayText.trim()) return a.essayText.trim().slice(-320);
  for (const letter of ['c', 'b', 'a'] as const) {
    if (a.answers[letter].trim()) return a.answers[letter].trim().slice(-320);
  }
  if (a.essayText.trim()) return a.essayText.trim().slice(-320);
  return '';
}

// A student who signs out and back in gets a fresh session, so the same person
// can own several profile rows and their attempts can carry several uids.
// Group everything by their stable identity (class + name).
function identityOf(x: { studentKey?: string; studentUid?: string; uid?: string }): string {
  return x.studentKey ?? x.studentUid ?? x.uid ?? '?';
}

function attemptWords(a: Attempt): number {
  return (
    wordCount(a.answers.a) + wordCount(a.answers.b) + wordCount(a.answers.c) + wordCount(a.essayText)
  );
}

function markLabel(a: Attempt): string {
  if (a.feedback?.returnedAt) {
    return feedbackComplete(a.feedback)
      ? feedbackTotal(a.feedback) + '/50'
      : feedbackTotal(a.feedback) + ' (partial)';
  }
  if (a.feedback) return 'Draft';
  return a.status === 'submitted' ? 'To mark' : '—';
}

/** The visible attempts as a spreadsheet: one row per paper, for records
 *  and reporting. */
function attemptsCsv(rows: Attempt[]): string {
  const esc = (v: string | number) => {
    const s = String(v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const lines = [
    [
      'Student', 'Class', 'Paper', 'Status', 'Started', 'Submitted',
      'Words (a)', 'Words (b)', 'Words (c)', 'Words (essay)', 'Words total',
      'Minutes worked', 'Mark',
    ].join(','),
  ];
  for (const a of rows) {
    const wa = wordCount(a.answers.a);
    const wb = wordCount(a.answers.b);
    const wc = wordCount(a.answers.c);
    const we = wordCount(a.essayText);
    lines.push(
      [
        esc(a.studentName),
        esc(a.classCode),
        esc(getSourceSet(a.sourceSetId)?.title ?? a.sourceSetId),
        a.status,
        esc(fmtDate(a.createdAt)),
        esc(a.submittedAt ? fmtDate(a.submittedAt) : ''),
        wa, wb, wc, we, wa + wb + wc + we,
        a.timing ? Math.round(elapsed(a.timing) / 60000) : '',
        esc(markLabel(a)),
      ].join(','),
    );
  }
  return lines.join('\n');
}

function downloadCsv(rows: Attempt[], name: string) {
  const blob = new Blob(['﻿' + attemptsCsv(rows)], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

/** The attempts table, used both for "All attempts" and for one student's
 *  history (where the student and class columns would just repeat). */
function AttemptsTable({
  attempts,
  showStudent = false,
  onDelete,
}: {
  attempts: Attempt[];
  showStudent?: boolean;
  onDelete: (a: Attempt) => void;
}) {
  return (
    <table className="roster">
      <thead>
        <tr>
          {showStudent && <th>Student</th>}
          {showStudent && <th>Class</th>}
          <th>Paper</th>
          <th>Status</th>
          <th>Started</th>
          <th>Words</th>
          <th>Time</th>
          <th>Mark</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {attempts.map((a) => (
          <tr key={a.id}>
            {showStudent && <td>{a.studentName}</td>}
            {showStudent && <td>{a.classCode}</td>}
            <td>{getSourceSet(a.sourceSetId)?.title ?? a.sourceSetId}</td>
            <td>
              <span className={'badge ' + (a.status === 'submitted' ? 'submitted' : 'progress')}>
                {a.status === 'submitted' ? 'Submitted' : 'In progress'}
              </span>
            </td>
            <td>{fmtDate(a.createdAt)}</td>
            <td>{attemptWords(a)}</td>
            <td style={{ whiteSpace: 'nowrap' }}>{a.timing ? timingBrief(a.timing, a.status) : '—'}</td>
            <td style={{ whiteSpace: 'nowrap' }}>{markLabel(a)}</td>
            <td style={{ whiteSpace: 'nowrap' }}>
              <Link to={'/attempt/' + a.id}>Open</Link>
              {' · '}
              <a
                href="#delete"
                className="danger-link"
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(a);
                }}
              >
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Taking a student off the roster is permanent, and what should happen to
 *  their papers depends on why they are going: a mistyped name leaves junk
 *  worth clearing out, a student who has left the class may have work worth
 *  keeping. So the dialog asks rather than assuming. */
function RemoveStudentDialog({
  student,
  attempts,
  sessions,
  onCancel,
  onRemove,
}: {
  student: StudentProfile;
  attempts: Attempt[];
  sessions: number;
  onCancel: () => void;
  onRemove: (alsoDeleteWork: boolean) => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const submitted = attempts.filter((a) => a.status === 'submitted').length;

  async function go(alsoDeleteWork: boolean) {
    setBusy(true);
    setErr('');
    try {
      await onRemove(alsoDeleteWork);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Could not remove this student.');
      setBusy(false);
    }
  }

  return (
    <div className="modal-scrim" onClick={busy ? undefined : onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>
          Remove {student.name} from class {student.classCode}?
        </h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: 14.5 }}>
          They come off the class list straight away
          {sessions > 1 ? ', along with all ' + sessions + ' of their sign-ins' : ''}. If they still
          have the site open they will be sent back to the sign-in screen. Nothing stops them
          joining again with the class code — change the code if you need to keep them out.
        </p>
        {attempts.length > 0 ? (
          <>
            <p style={{ fontSize: 14.5 }}>
              They have <strong>{attempts.length}</strong> paper{attempts.length === 1 ? '' : 's'} on
              record ({submitted} submitted). Choose what happens to them:
            </p>
            {err && <div className="form-error">{err}</div>}
            <div className="actions">
              <button onClick={onCancel} disabled={busy}>
                Cancel
              </button>
              <button onClick={() => void go(false)} disabled={busy}>
                Remove, keep their papers
              </button>
              <button className="danger-ghost" onClick={() => void go(true)} disabled={busy}>
                {busy ? 'Removing…' : 'Remove and delete their papers'}
              </button>
            </div>
          </>
        ) : (
          <>
            <p style={{ fontSize: 14.5 }}>They have not sat a paper, so nothing else is lost.</p>
            {err && <div className="form-error">{err}</div>}
            <div className="actions">
              <button onClick={onCancel} disabled={busy}>
                Cancel
              </button>
              <button className="danger-ghost" onClick={() => void go(false)} disabled={busy}>
                {busy ? 'Removing…' : 'Remove student'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/** One student's history, opened from the roster: everything they have sat,
 *  newest first, without going near the all-attempts list. */
function StudentDetail({
  student,
  classTitle,
  attempts,
  onBack,
  onDelete,
  onRemoveStudent,
  onResetPin,
}: {
  student: StudentProfile;
  classTitle?: string;
  attempts: Attempt[];
  onBack: () => void;
  onDelete: (a: Attempt) => void;
  onRemoveStudent: () => void;
  onResetPin: () => void;
}) {
  const submitted = attempts.filter((a) => a.status === 'submitted').length;
  const inProgress = attempts.length - submitted;
  const returned = attempts.filter(
    (a) => a.feedback?.returnedAt && feedbackComplete(a.feedback),
  );
  const average =
    returned.length > 0
      ? Math.round(
          (returned.reduce((sum, a) => sum + feedbackTotal(a.feedback!), 0) / returned.length) * 10,
        ) / 10
      : null;

  return (
    <div className="student-detail">
      <div className="detail-bar">
        <button className="back-link" onClick={onBack}>
          ← All students
        </button>
        <span style={{ display: 'flex', gap: 10 }}>
          <button className="back-link" onClick={onResetPin} title="Let this student choose a new PIN at their next sign-in">
            Reset PIN
          </button>
          <button className="danger-ghost back-link" onClick={onRemoveStudent}>
            Remove student
          </button>
        </span>
      </div>
      <div className="student-head">
        <div>
          <h2>{student.name}</h2>
          <div className="meta">
            {classTitle ? classTitle + ' · ' : ''}Class {student.classCode} · joined{' '}
            {fmtDate(student.createdAt)}
          </div>
        </div>
        <div className="stat-chips">
          <div className="chip">
            <b>{attempts.length}</b>
            <span>attempt{attempts.length === 1 ? '' : 's'}</span>
          </div>
          <div className="chip">
            <b>{submitted}</b>
            <span>submitted</span>
          </div>
          {inProgress > 0 && (
            <div className="chip">
              <b>{inProgress}</b>
              <span>in progress</span>
            </div>
          )}
          {average !== null && (
            <div className="chip">
              <b>{average}/50</b>
              <span>average mark</span>
            </div>
          )}
        </div>
      </div>
      {attempts.length === 0 ? (
        <div className="empty">{student.name} hasn’t started a paper yet.</div>
      ) : (
        <AttemptsTable attempts={attempts} onDelete={onDelete} />
      )}
    </div>
  );
}

export function TeacherPage() {
  const store = getStore();
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState(store.isTeacherSignedIn() || store.mode === 'local');
  const [email, setEmail] = useState(TEACHER_EMAILS[0] ?? '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const [tab, setTab] = useState<Tab>('live');
  const [active, setActive] = useState<Attempt[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [classFilter, setClassFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [newClassName, setNewClassName] = useState('');
  /** Identity of the student whose history is open on the Students tab. */
  const [openStudent, setOpenStudent] = useState<string | null>(null);
  /** Identity of the student the remove dialog is asking about. */
  const [removingStudent, setRemovingStudent] = useState<string | null>(null);
  /** The attempt the delete dialog is asking about. */
  const [deletingAttempt, setDeletingAttempt] = useState<Attempt | null>(null);
  /** The student whose PIN the reset dialog is asking about. */
  const [resettingPin, setResettingPin] = useState<StudentProfile | null>(null);
  /** Extra teacher emails (beyond the built-in list) and the add box. */
  const [extraTeachers, setExtraTeachers] = useState<string[]>([]);
  const [newTeacher, setNewTeacher] = useState('');
  const [teacherMsg, setTeacherMsg] = useState('');
  const [, setTick] = useState(0);

  function chooseTab(t: Tab) {
    setTab(t);
    setOpenStudent(null);
  }

  // In local mode there is no real teacher auth — flip the flag so the store
  // reports consistently. In cloud mode, wait for Firebase to restore any
  // persisted teacher sign-in before deciding to show the login form.
  useEffect(() => {
    if (store.mode === 'local') {
      if (!store.isTeacherSignedIn()) void store.teacherSignIn('', '');
      setSignedIn(true);
      return;
    }
    void store.awaitAuthReady().then(() => {
      if (store.isTeacherSignedIn()) setSignedIn(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = useCallback(async () => {
    if (!signedIn) return;
    try {
      const [att, cls, extras] = await Promise.all([
        store.listAllAttempts(),
        store.listClasses(),
        store.listExtraTeachers().catch(() => [] as string[]),
      ]);
      setAttempts(att);
      setClasses(cls);
      setExtraTeachers(extras);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load data.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  // Live subscriptions (attempts in progress, and the class roster, which
  // grows the moment a student joins) + a ticker so "last activity" labels
  // stay fresh.
  useEffect(() => {
    if (!signedIn) return;
    const unActive = store.subscribeActiveAttempts(setActive);
    const unStudents = store.subscribeStudents(setStudents);
    const t = window.setInterval(() => setTick((x) => x + 1), 5000);
    return () => {
      unActive();
      unStudents();
      window.clearInterval(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await store.teacherSignIn(email.trim(), password);
      if (!store.isTeacherSignedIn()) {
        throw new Error('This account is not registered as a teacher for this site.');
      }
      setSignedIn(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign-in failed.');
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    await store.teacherSignOut();
    setSignedIn(false);
    navigate('/');
  }

  async function deleteAttempt(a: Attempt) {
    await store.deleteAttempt(a.id);
    setAttempts((cur) => cur.filter((x) => x.id !== a.id));
    setActive((cur) => cur.filter((x) => x.id !== a.id));
    setDeletingAttempt(null);
  }

  async function resetPin(s: StudentProfile) {
    await store.resetStudentPin(s.studentKey);
    setResettingPin(null);
  }

  async function addTeacher(e: React.FormEvent) {
    e.preventDefault();
    const email = newTeacher.trim().toLowerCase();
    if (!email || !email.includes('@')) return;
    if (TEACHER_EMAILS.includes(email) || extraTeachers.includes(email)) {
      setTeacherMsg('That address already has teacher access.');
      return;
    }
    const next = [...extraTeachers, email];
    try {
      await store.setExtraTeachers(next);
      setExtraTeachers(next);
      setNewTeacher('');
      setTeacherMsg(
        'Added. Remember: they also need a Firebase account with this email (SETUP.md step 2) before they can sign in.',
      );
    } catch (err) {
      setTeacherMsg('Could not save: ' + (err instanceof Error ? err.message : 'unknown error'));
    }
  }

  async function removeTeacher(email: string) {
    const next = extraTeachers.filter((t) => t !== email);
    try {
      await store.setExtraTeachers(next);
      setExtraTeachers(next);
      setTeacherMsg('Removed ' + email + '.');
    } catch (err) {
      setTeacherMsg('Could not save: ' + (err instanceof Error ? err.message : 'unknown error'));
    }
  }

  /** Delete every profile row behind one name, and optionally the papers
   *  written under it. The roster subscription confirms this a moment later;
   *  the local state goes first so the row disappears on the click. */
  async function removeStudent(identity: string, alsoDeleteWork: boolean) {
    const profiles = students.filter((s) => identityOf(s) === identity);
    const work = alsoDeleteWork ? (attemptsByStudent.get(identity) ?? []) : [];
    for (const a of work) await store.deleteAttempt(a.id);
    await store.deleteStudents(
      profiles.map((s) => s.uid),
      [...new Set(profiles.map((s) => s.studentKey).filter(Boolean))],
    );
    const gone = new Set(work.map((a) => a.id));
    setStudents((cur) => cur.filter((s) => identityOf(s) !== identity));
    if (gone.size > 0) {
      setAttempts((cur) => cur.filter((a) => !gone.has(a.id)));
      setActive((cur) => cur.filter((a) => !gone.has(a.id)));
    }
    setRemovingStudent(null);
    if (openStudent === identity) setOpenStudent(null);
  }

  async function createClass(e: React.FormEvent) {
    e.preventDefault();
    if (!newClassName.trim()) return;
    await store.createClass(newClassName.trim());
    setNewClassName('');
    void refresh();
  }

  // The full list is a snapshot, loaded on sign-in and on ↻ Refresh; the live
  // subscription keeps in-progress work current. Merging the two means a paper
  // started since the last refresh still shows up in the tables below.
  const allAttempts = useMemo(() => {
    const byId = new Map<string, Attempt>();
    for (const a of attempts) byId.set(a.id, a);
    for (const a of active) byId.set(a.id, a);
    return [...byId.values()].sort((a, b) => b.createdAt - a.createdAt);
  }, [attempts, active]);

  const filteredAttempts = useMemo(() => {
    return allAttempts.filter((a) => {
      if (classFilter !== 'all' && a.classCode !== classFilter) return false;
      if (search && !a.studentName.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [allAttempts, classFilter, search]);

  // Attempts written before studentKey existed carry only the session uid;
  // reunite them with their student through the profile that session created.
  const identityByUid = useMemo(() => {
    const m = new Map<string, string>();
    for (const s of students) m.set(s.uid, identityOf(s));
    return m;
  }, [students]);

  const attemptsByStudent = useMemo(() => {
    const m = new Map<string, Attempt[]>();
    for (const a of allAttempts) {
      const k = a.studentKey ?? identityByUid.get(a.studentUid) ?? a.studentUid;
      const list = m.get(k) ?? [];
      list.push(a);
      m.set(k, list);
    }
    return m;
  }, [allAttempts, identityByUid]);

  const rosterStudents = useMemo(() => {
    const m = new Map<string, StudentProfile>();
    for (const s of students) {
      const k = identityOf(s);
      const prev = m.get(k);
      if (!prev || s.lastActiveAt > prev.lastActiveAt) m.set(k, s);
    }
    return [...m.values()].sort((a, b) => a.name.localeCompare(b.name));
  }, [students]);

  const roster = useMemo(
    () => rosterStudents.filter((s) => classFilter === 'all' || s.classCode === classFilter),
    [rosterStudents, classFilter],
  );

  const openProfile = openStudent
    ? (rosterStudents.find((s) => identityOf(s) === openStudent) ?? null)
    : null;

  const removingProfile = removingStudent
    ? (rosterStudents.find((s) => identityOf(s) === removingStudent) ?? null)
    : null;
  const removingSessions = removingStudent
    ? students.filter((s) => identityOf(s) === removingStudent).length
    : 0;

  const classSelect = (
    <select
      className="class-select"
      value={classFilter}
      onChange={(e) => setClassFilter(e.target.value)}
    >
      <option value="all">All classes</option>
      {classes.map((c) => (
        <option key={c.id} value={c.code}>
          {c.name} ({c.code})
        </option>
      ))}
    </select>
  );

  if (!signedIn) {
    return (
      <div className="page narrow">
        <div className="hero">
          <div className="brand">Essay &amp; Sauce</div>
          <div className="tag">Teacher dashboard</div>
        </div>
        <form className="join-card" onSubmit={signIn}>
          <h3>Teacher sign-in</h3>
          <label htmlFor="temail">Email</label>
          <input id="temail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="tpass">Password</label>
          <input
            id="tpass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="form-error">{error}</div>}
          <div className="actions">
            <button className="primary big" type="submit" disabled={busy}>
              {busy ? 'Signing in…' : 'Sign in'}
            </button>
          </div>
        </form>
        <div className="teacher-link">
          <Link to="/">← Student sign-in</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page wide">
      <div className="masthead">
        <div>
          <div className="brand">
            <Link to="/teacher">Essay &amp; Sauce</Link>
          </div>
          <div className="sub">Teacher dashboard — Nazism in Germany</div>
        </div>
        <div className="who">
          {store.mode === 'cloud' ? 'Signed in as teacher' : 'Local mode'}
          <button onClick={signOut}>Sign out</button>
        </div>
      </div>

      {error && <div className="form-error">{error}</div>}

      <div className="tabs">
        <button className={tab === 'live' ? 'active' : ''} onClick={() => chooseTab('live')}>
          Live now {active.length > 0 ? `(${active.length})` : ''}
        </button>
        <button className={tab === 'students' ? 'active' : ''} onClick={() => chooseTab('students')}>
          Students {rosterStudents.length > 0 ? `(${rosterStudents.length})` : ''}
        </button>
        <button className={tab === 'attempts' ? 'active' : ''} onClick={() => chooseTab('attempts')}>
          All attempts
        </button>
        <button className={tab === 'classes' ? 'active' : ''} onClick={() => chooseTab('classes')}>
          Classes
        </button>
        <button onClick={() => void refresh()} title="Reload students, attempts and classes">
          ↻ Refresh
        </button>
      </div>

      {tab === 'live' && (
        <>
          {active.length === 0 ? (
            <div className="empty">
              No one is sitting an exam right now. When a student is working, their card appears
              here and updates as they type.
            </div>
          ) : (
            <div className="live-grid">
              {active.map((a) => {
                const words =
                  wordCount(a.answers.a) +
                  wordCount(a.answers.b) +
                  wordCount(a.answers.c) +
                  wordCount(a.essayText);
                const snippet = latestSnippet(a);
                const recentlyTyping = Date.now() - a.updatedAt < 30000;
                const timing = a.timing;
                const outOfTime = !!timing && timing.mode !== 'off' && remaining(timing) <= 0;
                return (
                  <Link
                    to={'/attempt/' + a.id}
                    key={a.id}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="live-card">
                      <div className="head">
                        <span className="name">{a.studentName}</span>
                        <span className={'badge ' + (recentlyTyping ? 'live' : 'progress')}>
                          {recentlyTyping ? 'Typing' : 'In progress'}
                        </span>
                      </div>
                      <div className="meta">
                        Class {a.classCode} ·{' '}
                        {a.page === 1 ? 'Source Analysis' : 'Essay'} · {words} words · active{' '}
                        {timeAgo(a.updatedAt)}
                      </div>
                      {timing && (
                        <div className={'meta clock-line' + (outOfTime ? ' over' : '')}>
                          {modeLabel(timing.mode)} · {timingBrief(timing, a.status)}
                        </div>
                      )}
                      {snippet ? (
                        <div className="snippet">…{snippet}</div>
                      ) : (
                        <div className="meta">Nothing written yet.</div>
                      )}
                      <div className="meta">
                        Paper: {getSourceSet(a.sourceSetId)?.title ?? a.sourceSetId} · click to watch
                        live
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}

      {tab === 'students' && openProfile && (
        <StudentDetail
          student={openProfile}
          classTitle={classes.find((c) => c.code === openProfile.classCode)?.name}
          attempts={attemptsByStudent.get(identityOf(openProfile)) ?? []}
          onBack={() => setOpenStudent(null)}
          onDelete={setDeletingAttempt}
          onRemoveStudent={() => setRemovingStudent(identityOf(openProfile))}
          onResetPin={() => setResettingPin(openProfile)}
        />
      )}

      {tab === 'students' && !openProfile && (
        <>
          <div className="filter-bar">
            {classSelect}
            <span className="roster-note">
              Updating live — students appear here as they join. Click a name for their attempts.
            </span>
          </div>
          {roster.length === 0 ? (
            <div className="empty">
              {rosterStudents.length === 0
                ? 'No students have joined yet. Share a class code from the Classes tab.'
                : 'No students have joined this class yet.'}
            </div>
          ) : (
            <table className="roster">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Attempts</th>
                  <th>Submitted</th>
                  <th>Last activity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {roster.map((s) => {
                  const list = attemptsByStudent.get(identityOf(s)) ?? [];
                  const submitted = list.filter((a) => a.status === 'submitted').length;
                  const last = Math.max(s.lastActiveAt, ...list.map((a) => a.updatedAt));
                  const isNew = Date.now() - s.createdAt < JUST_JOINED_MS;
                  return (
                    <tr
                      key={s.uid}
                      className="clickable"
                      onClick={() => setOpenStudent(identityOf(s))}
                    >
                      <td>
                        <button className="name-link" title={'Open ' + s.name + '’s attempts'}>
                          {s.name}
                        </button>
                        {isNew && <span className="badge live just-joined">Just joined</span>}
                      </td>
                      <td>{s.classCode}</td>
                      <td>{list.length}</td>
                      <td>{submitted}</td>
                      <td>{timeAgo(last)}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <a
                          href="#remove"
                          className="danger-link"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setRemovingStudent(identityOf(s));
                          }}
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </>
      )}

      {tab === 'attempts' && (
        <>
          <div className="filter-bar">
            {classSelect}
            <input
              type="text"
              placeholder="Search by student name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ maxWidth: 260 }}
            />
            <button
              onClick={() =>
                downloadCsv(
                  filteredAttempts,
                  'essay-and-sauce-attempts' + (classFilter !== 'all' ? '-' + classFilter : '') + '.csv',
                )
              }
              disabled={filteredAttempts.length === 0}
              title="Download the attempts below as a spreadsheet (opens in Excel)"
            >
              ⬇ Download CSV
            </button>
          </div>
          {filteredAttempts.length === 0 ? (
            <div className="empty">
              {allAttempts.length === 0
                ? 'No papers yet. Once students start their first practice exams, every paper — in progress or submitted — is listed here.'
                : 'No attempts match this filter.'}
            </div>
          ) : (
            <AttemptsTable attempts={filteredAttempts} showStudent onDelete={setDeletingAttempt} />
          )}
        </>
      )}

      {tab === 'classes' && (
        <>
          <form onSubmit={createClass} style={{ display: 'flex', gap: 10, marginBottom: 18, maxWidth: 460 }}>
            <input
              type="text"
              placeholder="New class name, e.g. Year 12 Modern History"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
            <button className="primary" type="submit">
              Create
            </button>
          </form>
          {classes.length === 0 ? (
            <div className="empty">
              No classes yet. Create one — students join with the short code it generates.
            </div>
          ) : (
            <table className="roster">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Join code</th>
                  <th>Created</th>
                  <th>Students</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((c) => (
                  <tr
                    key={c.id}
                    className="clickable"
                    onClick={() => {
                      setClassFilter(c.code);
                      chooseTab('students');
                    }}
                  >
                    <td>
                      <button className="name-link" title={'Show the ' + c.name + ' roster'}>
                        {c.name}
                      </button>
                    </td>
                    <td>
                      <span className="class-code">{c.code}</span>
                    </td>
                    <td>{fmtDate(c.createdAt)}</td>
                    <td>{rosterStudents.filter((s) => s.classCode === c.code).length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <p style={{ marginTop: 14, color: 'var(--ink-soft)', fontSize: 14 }}>
            Students go to the site, enter their name, the join code and a 4-digit PIN of their
            choice, and appear here automatically. The PIN protects their work; you can reset a
            forgotten PIN from the student’s page.
          </p>

          <div className="teachers-panel">
            <h3>Teachers</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, marginTop: 0 }}>
              These accounts can use this dashboard, watch students live and mark papers.
            </p>
            <ul className="teacher-list">
              {TEACHER_EMAILS.map((t) => (
                <li key={t}>
                  {t} <span className="badge submitted">built in</span>
                </li>
              ))}
              {extraTeachers.map((t) => (
                <li key={t}>
                  {t}{' '}
                  <a
                    href="#remove-teacher"
                    className="danger-link"
                    onClick={(e) => {
                      e.preventDefault();
                      void removeTeacher(t);
                    }}
                  >
                    Remove
                  </a>
                </li>
              ))}
            </ul>
            <form onSubmit={addTeacher} style={{ display: 'flex', gap: 10, maxWidth: 460 }}>
              <input
                type="email"
                placeholder="colleague@example.com"
                value={newTeacher}
                onChange={(e) => setNewTeacher(e.target.value)}
              />
              <button className="primary" type="submit">
                Add teacher
              </button>
            </form>
            {teacherMsg && (
              <p style={{ color: 'var(--ink-soft)', fontSize: 14 }} role="status">
                {teacherMsg}
              </p>
            )}
            <p style={{ color: 'var(--ink-soft)', fontSize: 13.5 }}>
              Two steps happen outside this page: the colleague needs a Firebase sign-in with this
              email (Firebase console → Authentication → Add user), and the database rules must be
              the current ones from the repository (see SETUP.md). Adding them here does the rest.
            </p>
          </div>
        </>
      )}

      {deletingAttempt && (
        <ConfirmDialog
          title={'Delete ' + deletingAttempt.studentName + '’s exam?'}
          body={
            'Their ' +
            (deletingAttempt.status === 'submitted' ? 'submitted' : 'in-progress') +
            ' paper “' +
            (getSourceSet(deletingAttempt.sourceSetId)?.title ?? deletingAttempt.sourceSetId) +
            '” will be permanently removed, including all their answers. This cannot be undone.'
          }
          actionLabel="Delete exam"
          danger
          onCancel={() => setDeletingAttempt(null)}
          onConfirm={() => deleteAttempt(deletingAttempt)}
        />
      )}
      {resettingPin && (
        <ConfirmDialog
          title={'Reset ' + resettingPin.name + '’s PIN?'}
          body={
            'Their current PIN stops working, and the next person to sign in as “' +
            resettingPin.name +
            '” in class ' +
            resettingPin.classCode +
            ' chooses a new one. Do this when a student has forgotten their PIN.'
          }
          actionLabel="Reset PIN"
          onCancel={() => setResettingPin(null)}
          onConfirm={() => resetPin(resettingPin)}
        />
      )}

      {removingProfile && (
        <RemoveStudentDialog
          student={removingProfile}
          attempts={attemptsByStudent.get(identityOf(removingProfile)) ?? []}
          sessions={removingSessions}
          onCancel={() => setRemovingStudent(null)}
          onRemove={(alsoDeleteWork) =>
            removeStudent(identityOf(removingProfile), alsoDeleteWork)
          }
        />
      )}
    </div>
  );
}
