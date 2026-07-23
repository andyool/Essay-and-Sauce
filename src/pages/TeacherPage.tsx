import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getSourceSet } from '../data/bank';
import type { Attempt, ClassInfo, StudentProfile } from '../data/types';
import { fmtDate, timeAgo, wordCount } from '../lib/format';
import { getStore } from '../store';
import { TEACHER_EMAILS } from '../store/firebaseConfig';

type Tab = 'live' | 'students' | 'attempts' | 'classes';

function latestSnippet(a: Attempt): string {
  if (a.page === 2 && a.essayText.trim()) return a.essayText.trim().slice(-320);
  for (const letter of ['c', 'b', 'a'] as const) {
    if (a.answers[letter].trim()) return a.answers[letter].trim().slice(-320);
  }
  if (a.essayText.trim()) return a.essayText.trim().slice(-320);
  return '';
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
  const [, setTick] = useState(0);

  // In local mode there is no real teacher auth — flip the flag so the store
  // reports consistently.
  useEffect(() => {
    if (store.mode === 'local' && !store.isTeacherSignedIn()) {
      void store.teacherSignIn('', '');
      setSignedIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = useCallback(async () => {
    if (!signedIn) return;
    try {
      const [att, stu, cls] = await Promise.all([
        store.listAllAttempts(),
        store.listStudents(),
        store.listClasses(),
      ]);
      setAttempts(att);
      setStudents(stu);
      setClasses(cls);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load data.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  // Live subscription + a ticker so "last activity" labels stay fresh.
  useEffect(() => {
    if (!signedIn) return;
    const un = store.subscribeActiveAttempts(setActive);
    const t = window.setInterval(() => setTick((x) => x + 1), 5000);
    return () => {
      un();
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
    if (
      !window.confirm(
        'Delete ' +
          a.studentName +
          '’s ' +
          (a.status === 'submitted' ? 'submitted' : 'in-progress') +
          ' exam (' +
          (getSourceSet(a.sourceSetId)?.title ?? a.sourceSetId) +
          ')? This permanently removes it, including all their answers. This cannot be undone.',
      )
    ) {
      return;
    }
    await store.deleteAttempt(a.id);
    setAttempts((cur) => cur.filter((x) => x.id !== a.id));
  }

  async function createClass(e: React.FormEvent) {
    e.preventDefault();
    if (!newClassName.trim()) return;
    await store.createClass(newClassName.trim());
    setNewClassName('');
    void refresh();
  }

  const filteredAttempts = useMemo(() => {
    return attempts.filter((a) => {
      if (classFilter !== 'all' && a.classCode !== classFilter) return false;
      if (search && !a.studentName.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [attempts, classFilter, search]);

  const attemptsByStudent = useMemo(() => {
    const m = new Map<string, Attempt[]>();
    for (const a of attempts) {
      const list = m.get(a.studentUid) ?? [];
      list.push(a);
      m.set(a.studentUid, list);
    }
    return m;
  }, [attempts]);

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
        <button className={tab === 'live' ? 'active' : ''} onClick={() => setTab('live')}>
          Live now {active.length > 0 ? `(${active.length})` : ''}
        </button>
        <button className={tab === 'students' ? 'active' : ''} onClick={() => setTab('students')}>
          Students
        </button>
        <button className={tab === 'attempts' ? 'active' : ''} onClick={() => setTab('attempts')}>
          All attempts
        </button>
        <button className={tab === 'classes' ? 'active' : ''} onClick={() => setTab('classes')}>
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

      {tab === 'students' && (
        <>
          {students.length === 0 ? (
            <div className="empty">No students have joined yet. Share a class code from the Classes tab.</div>
          ) : (
            <table className="roster">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Attempts</th>
                  <th>Submitted</th>
                  <th>Last activity</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => {
                  const list = attemptsByStudent.get(s.uid) ?? [];
                  const submitted = list.filter((a) => a.status === 'submitted').length;
                  const last = list.length > 0 ? Math.max(...list.map((a) => a.updatedAt)) : null;
                  return (
                    <tr key={s.uid}>
                      <td>{s.name}</td>
                      <td>{s.classCode}</td>
                      <td>{list.length}</td>
                      <td>{submitted}</td>
                      <td>{last ? timeAgo(last) : '—'}</td>
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
          <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              style={{ font: 'inherit', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--line)' }}
            >
              <option value="all">All classes</option>
              {classes.map((c) => (
                <option key={c.id} value={c.code}>
                  {c.name} ({c.code})
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search by student name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ maxWidth: 260 }}
            />
          </div>
          {filteredAttempts.length === 0 ? (
            <div className="empty">No attempts match.</div>
          ) : (
            <table className="roster">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Paper</th>
                  <th>Status</th>
                  <th>Started</th>
                  <th>Words</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredAttempts.map((a) => {
                  const words =
                    wordCount(a.answers.a) +
                    wordCount(a.answers.b) +
                    wordCount(a.answers.c) +
                    wordCount(a.essayText);
                  return (
                    <tr key={a.id}>
                      <td>{a.studentName}</td>
                      <td>{a.classCode}</td>
                      <td>{getSourceSet(a.sourceSetId)?.title ?? a.sourceSetId}</td>
                      <td>
                        <span
                          className={'badge ' + (a.status === 'submitted' ? 'submitted' : 'progress')}
                        >
                          {a.status === 'submitted' ? 'Submitted' : 'In progress'}
                        </span>
                      </td>
                      <td>{fmtDate(a.createdAt)}</td>
                      <td>{words}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <Link to={'/attempt/' + a.id}>Open</Link>
                        {' · '}
                        <a
                          href="#delete"
                          className="danger-link"
                          onClick={(e) => {
                            e.preventDefault();
                            void deleteAttempt(a);
                          }}
                        >
                          Delete
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
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>
                      <span className="class-code">{c.code}</span>
                    </td>
                    <td>{fmtDate(c.createdAt)}</td>
                    <td>{students.filter((s) => s.classCode === c.code).length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <p style={{ marginTop: 14, color: 'var(--ink-soft)', fontSize: 14 }}>
            Students go to the site, enter their name and the join code, and appear here
            automatically.
          </p>
        </>
      )}
    </div>
  );
}
