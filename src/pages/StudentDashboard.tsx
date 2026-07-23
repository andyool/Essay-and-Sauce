import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getSourceSet } from '../data/bank';
import { ALL_POINT_IDS, ELECTIVE_TITLE, INDIVIDUALS, INDIVIDUAL_IDS, SYLLABUS } from '../data/syllabus';
import type { Attempt, StudentProfile, SyllabusPointId, TimerMode } from '../data/types';
import { feedbackComplete, feedbackTotal, fmtDate, newId, wordCount } from '../lib/format';
import { GenerationError, generateExam } from '../lib/generator';
import {
  DEFAULT_DURATION,
  DURATION_MINUTES,
  describeDuration,
  newTiming,
  suggestedSectionOne,
  timingBrief,
} from '../lib/timing';
import { getStore } from '../store';

const KEY_SYLLABUS = 'eas.syllabusSelection';
const KEY_TIMER = 'eas.timerSettings';

interface TimerSettings {
  mode: TimerMode;
  totalMinutes: number;
}

function loadTimerSettings(): TimerSettings {
  try {
    const raw = localStorage.getItem(KEY_TIMER);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<TimerSettings>;
      const mode: TimerMode =
        parsed.mode === 'off' || parsed.mode === 'practice' || parsed.mode === 'strict'
          ? parsed.mode
          : 'practice';
      const minutes = DURATION_MINUTES.find((m) => m === parsed.totalMinutes) ?? DEFAULT_DURATION;
      return { mode, totalMinutes: minutes };
    }
  } catch {
    /* ignore */
  }
  return { mode: 'practice', totalMinutes: DEFAULT_DURATION };
}

const TIMER_CHOICES: { mode: TimerMode; label: string; help: string }[] = [
  {
    mode: 'practice',
    label: 'Practice timer',
    help: 'A countdown you can pause. It keeps going past zero instead of stopping you, so you can see how much extra time you needed.',
  },
  {
    mode: 'strict',
    label: 'Exam conditions',
    help: 'No pausing, and the paper is submitted automatically the moment the time runs out — like the real thing.',
  },
  {
    mode: 'off',
    label: 'No timer',
    help: 'Work at your own pace. Your time is still measured, just for information.',
  },
];

function loadSelection(): SyllabusPointId[] {
  try {
    const raw = localStorage.getItem(KEY_SYLLABUS);
    if (raw) {
      const parsed = JSON.parse(raw) as string[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        const valid = new Set<string>(ALL_POINT_IDS);
        const selection = parsed.filter((id) => valid.has(id)) as SyllabusPointId[];
        // Selections saved before individuals were split out carry 'p7';
        // expand it to all individuals.
        if (parsed.includes('p7')) {
          for (const id of INDIVIDUAL_IDS) if (!selection.includes(id)) selection.push(id);
        }
        if (selection.length > 0) return selection;
      }
    }
  } catch {
    /* ignore */
  }
  return [...ALL_POINT_IDS];
}

export function StudentDashboard() {
  const store = getStore();
  const navigate = useNavigate();
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selection, setSelection] = useState<SyllabusPointId[]>(loadSelection);
  const [genError, setGenError] = useState('');
  const [busy, setBusy] = useState(false);
  const [timer, setTimer] = useState<TimerSettings>(loadTimerSettings);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const s = await store.getCurrentStudent();
      if (cancelled) return;
      if (!s) {
        navigate('/', { replace: true });
        return;
      }
      setStudent(s);
      const list = await store.listMyAttempts(s);
      if (!cancelled) {
        setAttempts(list);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inProgress = useMemo(() => attempts.filter((a) => a.status === 'in-progress'), [attempts]);

  function toggle(id: SyllabusPointId) {
    setSelection((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  }

  async function startExam() {
    if (!student) return;
    setGenError('');
    setBusy(true);
    try {
      localStorage.setItem(KEY_SYLLABUS, JSON.stringify(selection));
      localStorage.setItem(KEY_TIMER, JSON.stringify(timer));
      // Seen material: everything from previous attempts, oldest first so the
      // generator reuses the longest-ago sets when the bank is exhausted.
      const chrono = attempts.slice().sort((a, b) => a.createdAt - b.createdAt);
      const seenSets = chrono.map((a) => a.sourceSetId);
      const seenEssays = chrono.flatMap((a) => a.essayIds);
      const exam = generateExam(selection, seenSets, seenEssays);
      const attempt: Attempt = {
        id: newId(),
        studentUid: student.uid,
        studentKey: student.studentKey,
        studentName: student.name,
        classId: student.classId,
        classCode: student.classCode,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        submittedAt: null,
        status: 'in-progress',
        syllabusPoints: selection,
        sourceSetId: exam.sourceSetId,
        essayIds: exam.essayIds,
        answers: { a: '', b: '', c: '' },
        essayChoice: null,
        essayText: '',
        page: 1,
        timing: newTiming(timer.mode, timer.totalMinutes),
      };
      await store.createAttempt(attempt);
      navigate('/exam/' + attempt.id);
    } catch (err) {
      if (err instanceof GenerationError) setGenError(err.message);
      else setGenError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  async function leave() {
    await store.signOutStudent();
    navigate('/');
  }

  async function deleteAttempt(a: Attempt) {
    const set = getSourceSet(a.sourceSetId);
    const what =
      (a.status === 'submitted' ? 'your submitted exam' : 'your in-progress exam') +
      (set ? ' “' + set.title + '”' : '');
    if (!window.confirm('Delete ' + what + '? This permanently removes it, including everything you wrote. This cannot be undone.')) {
      return;
    }
    await store.deleteAttempt(a.id);
    setAttempts((cur) => cur.filter((x) => x.id !== a.id));
  }

  if (loading || !student) {
    return <div className="page narrow">Loading…</div>;
  }

  return (
    <div className="page">
      <div className="masthead">
        <div>
          <div className="brand">
            <Link to="/dashboard">Essay &amp; Sauce</Link>
          </div>
          <div className="sub">{ELECTIVE_TITLE}</div>
        </div>
        <div className="who">
          {student.name} · class {student.classCode}
          <button onClick={leave}>Sign out</button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <h2 style={{ margin: 0 }}>Your practice exams</h2>
        <button className="primary big" onClick={() => setShowModal(true)}>
          + Start a new practice exam
        </button>
      </div>

      {inProgress.length > 0 && (
        <p style={{ marginTop: 10, color: 'var(--ink-soft)' }}>
          You have {inProgress.length === 1 ? 'an exam' : inProgress.length + ' exams'} in progress —
          you can pick up right where you left off.
        </p>
      )}

      {attempts.length === 0 ? (
        <div className="empty">
          No attempts yet. Start your first practice exam — it takes your covered syllabus topics
          into account and builds a unique paper for you.
        </div>
      ) : (
        <div className="attempt-list">
          {attempts.map((a) => {
            const set = getSourceSet(a.sourceSetId);
            const words =
              wordCount(a.answers.a) + wordCount(a.answers.b) + wordCount(a.answers.c) + wordCount(a.essayText);
            return (
              <div className="attempt-row" key={a.id}>
                <div>
                  <div className="title">{set ? set.title : 'Practice exam'}</div>
                  <div className="meta">
                    Started {fmtDate(a.createdAt)}
                    {a.status === 'submitted' && a.submittedAt
                      ? ' · submitted ' + fmtDate(a.submittedAt)
                      : ''}
                    {' · ' + words + ' words written'}
                    {a.timing ? ' · ' + timingBrief(a.timing, a.status) : ''}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  {a.status === 'submitted' && a.feedback?.returnedAt ? (
                    <span className="badge marked">
                      {feedbackComplete(a.feedback)
                        ? 'Marked · ' + feedbackTotal(a.feedback) + '/50'
                        : 'Feedback'}
                    </span>
                  ) : (
                    <span className={'badge ' + (a.status === 'submitted' ? 'submitted' : 'progress')}>
                      {a.status === 'submitted' ? 'Submitted' : 'In progress'}
                    </span>
                  )}
                  {a.status === 'in-progress' ? (
                    <Link to={'/exam/' + a.id}>
                      <button className="primary">Resume</button>
                    </Link>
                  ) : (
                    <Link to={'/attempt/' + a.id}>
                      <button>Review</button>
                    </Link>
                  )}
                  <button className="danger-ghost" title="Delete this exam" onClick={() => void deleteAttempt(a)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showModal && (
        <div className="modal-scrim" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>What have you covered so far?</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14.5 }}>
              Un-tick any syllabus points your class has <strong>not</strong> covered yet. Your exam
              will only draw on the topics left ticked.
            </p>
            {SYLLABUS.map((p) => (
              <label className="syllabus-item" key={p.id}>
                <input
                  type="checkbox"
                  checked={selection.includes(p.id)}
                  onChange={() => toggle(p.id)}
                />
                <span>
                  <strong>{p.short}</strong>
                  <div className="full">{p.full}</div>
                </span>
              </label>
            ))}
            <label className="syllabus-item">
              <input
                type="checkbox"
                checked={INDIVIDUAL_IDS.every((id) => selection.includes(id))}
                ref={(el) => {
                  if (el) {
                    const some = INDIVIDUAL_IDS.some((id) => selection.includes(id));
                    const all = INDIVIDUAL_IDS.every((id) => selection.includes(id));
                    el.indeterminate = some && !all;
                  }
                }}
                onChange={() => {
                  const all = INDIVIDUAL_IDS.every((id) => selection.includes(id));
                  setSelection((cur) =>
                    all
                      ? cur.filter((id) => !INDIVIDUAL_IDS.includes(id))
                      : [...cur.filter((id) => !INDIVIDUAL_IDS.includes(id)), ...INDIVIDUAL_IDS],
                  );
                }}
              />
              <span>
                <strong>Significant individuals</strong>
                <div className="full">
                  The role and impact of significant individuals in Weimar and Nazi Germany — tick
                  each person your class has studied
                </div>
              </span>
            </label>
            <div className="individuals-grid">
              {INDIVIDUALS.map((person) => (
                <label className="individual-item" key={person.id}>
                  <input
                    type="checkbox"
                    checked={selection.includes(person.id)}
                    onChange={() => toggle(person.id)}
                  />
                  <span>{person.name}</span>
                </label>
              ))}
            </div>
            <h3 className="modal-section">How long have you got?</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14.5 }}>
              A full WACE Modern History paper allows three hours of working time. This practice
              paper is about half the length, so 1½ hours is the closest match — but shorter
              settings are useful for drilling one section under pressure.
            </p>
            <div className="timer-choices">
              {TIMER_CHOICES.map((c) => (
                <label
                  className={'timer-choice' + (timer.mode === c.mode ? ' selected' : '')}
                  key={c.mode}
                >
                  <input
                    type="radio"
                    name="timerMode"
                    checked={timer.mode === c.mode}
                    onChange={() => setTimer((t) => ({ ...t, mode: c.mode }))}
                  />
                  <span>
                    <strong>{c.label}</strong>
                    <div className="full">{c.help}</div>
                  </span>
                </label>
              ))}
            </div>
            {timer.mode !== 'off' && (
              <div className="duration-row">
                <span className="label">Working time</span>
                <div className="duration-buttons">
                  {DURATION_MINUTES.map((m) => (
                    <button
                      key={m}
                      className={timer.totalMinutes === m ? 'active' : ''}
                      onClick={() => setTimer((t) => ({ ...t, totalMinutes: m }))}
                    >
                      {m % 60 === 0 ? m / 60 + ' h' : Math.floor(m / 60) + '½ h'}
                    </button>
                  ))}
                </div>
                <div className="duration-note">
                  {describeDuration(timer.totalMinutes)} — suggested{' '}
                  {suggestedSectionOne(timer.totalMinutes)} min for Section One (source analysis) and{' '}
                  {timer.totalMinutes - suggestedSectionOne(timer.totalMinutes)} min for Section Two
                  (essay).
                  {timer.mode === 'strict' && ' The paper submits itself when the clock hits zero.'}
                </div>
              </div>
            )}
            {genError && <div className="form-error">{genError}</div>}
            <div className="actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button className="primary" onClick={startExam} disabled={busy || selection.length === 0}>
                {busy ? 'Building your exam…' : 'Generate my exam'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
