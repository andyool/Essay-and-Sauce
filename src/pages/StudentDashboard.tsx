import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ConfirmDialog, Loading } from '../components/Feedback';
import { getSourceSet } from '../data/bank';
import { individualIds, unitPointIds, unitsForYear, type Unit } from '../data/units';
import type { Attempt, StudentProfile, SyllabusPointId, TimerMode, UnitId } from '../data/types';
import { fmtDate, newId, wordCount } from '../lib/format';
import { GenerationError, generateExam } from '../lib/generator';
import {
  attemptWords,
  coveredPoints,
  feedbackComplete,
  feedbackTotal,
  orderPlans,
  paperLabel,
  paperMarks,
  planMarks,
  presetsForYear,
  seenMaterial,
  type SectionPlan,
} from '../lib/paper';
import {
  DURATION_MINUTES,
  describeDuration,
  newTiming,
  splitMinutes,
  suggestedDuration,
  timingBrief,
} from '../lib/timing';
import { getStore } from '../store';

const KEY_SYLLABUS_V2 = 'eas.syllabusSelection.v2';
const KEY_SYLLABUS_V1 = 'eas.syllabusSelection';
const KEY_TIMER = 'eas.timerSettings';
const KEY_PLAN = 'eas.paperPlan.v1';

interface TimerSettings {
  mode: TimerMode;
  totalMinutes: number;
}

/** Which sections of each unit the student wants in the paper. */
type Include = Partial<Record<UnitId, { source: boolean; essay: boolean }>>;

function loadTimerSettings(): TimerSettings {
  try {
    const raw = localStorage.getItem(KEY_TIMER);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<TimerSettings>;
      const mode: TimerMode =
        parsed.mode === 'off' || parsed.mode === 'practice' || parsed.mode === 'strict'
          ? parsed.mode
          : 'practice';
      const minutes = DURATION_MINUTES.find((m) => m === parsed.totalMinutes) ?? 90;
      return { mode, totalMinutes: minutes };
    }
  } catch {
    /* ignore */
  }
  return { mode: 'practice', totalMinutes: 90 };
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

/** Ticked syllabus points, kept per unit. Selections saved before units
 *  existed were one flat Nazism list; migrate them across. */
function loadSelection(units: Unit[]): Record<string, SyllabusPointId[]> {
  const out: Record<string, SyllabusPointId[]> = {};
  let stored: Record<string, string[]> = {};
  try {
    const raw = localStorage.getItem(KEY_SYLLABUS_V2);
    if (raw) stored = JSON.parse(raw) as Record<string, string[]>;
    else {
      const old = localStorage.getItem(KEY_SYLLABUS_V1);
      if (old) {
        const parsed = JSON.parse(old) as string[];
        if (Array.isArray(parsed)) {
          // 'p7' predates the split of individuals; expand it.
          const nazism = parsed.filter((id) => id !== 'p7');
          if (parsed.includes('p7')) {
            for (const u of unitsForYear(11)) {
              if (u.id === 'nazism') nazism.push(...individualIds(u));
            }
          }
          stored = { nazism };
        }
      }
    }
  } catch {
    /* ignore */
  }
  for (const unit of units) {
    const all = unitPointIds(unit);
    const valid = new Set(all);
    const saved = stored[unit.id]?.filter((id) => valid.has(id));
    out[unit.id] = saved && saved.length > 0 ? saved : [...all];
  }
  return out;
}

function loadInclude(units: Unit[], fallback: Include): Include {
  try {
    const raw = localStorage.getItem(KEY_PLAN);
    if (raw) {
      const parsed = JSON.parse(raw) as Include;
      const out: Include = {};
      let any = false;
      for (const u of units) {
        const p = parsed[u.id];
        out[u.id] = { source: !!p?.source, essay: !!p?.essay };
        if (p?.source || p?.essay) any = true;
      }
      if (any) return out;
    }
  } catch {
    /* ignore */
  }
  return fallback;
}

function includeToPlans(include: Include): SectionPlan[] {
  const plans: SectionPlan[] = [];
  for (const [unit, p] of Object.entries(include)) {
    if (p?.source) plans.push({ kind: 'source', unit: unit as UnitId });
    if (p?.essay) plans.push({ kind: 'essay', unit: unit as UnitId });
  }
  return orderPlans(plans);
}

function sameInclude(a: Include, b: Include, units: Unit[]): boolean {
  return units.every(
    (u) =>
      !!a[u.id]?.source === !!b[u.id]?.source && !!a[u.id]?.essay === !!b[u.id]?.essay,
  );
}

export function StudentDashboard() {
  const store = getStore();
  const navigate = useNavigate();
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [yearLevel, setYearLevel] = useState<11 | 12>(11);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selection, setSelection] = useState<Record<string, SyllabusPointId[]>>({});
  const [include, setInclude] = useState<Include>({});
  const [genError, setGenError] = useState('');
  const [busy, setBusy] = useState(false);
  const [timer, setTimer] = useState<TimerSettings>(loadTimerSettings);
  const [deleting, setDeleting] = useState<Attempt | null>(null);

  const units = useMemo(() => unitsForYear(yearLevel), [yearLevel]);
  const presets = useMemo(() => presetsForYear(yearLevel), [yearLevel]);

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
      // The class decides the year (the teacher can change it there); the
      // profile's copy is the fallback for offline or older data.
      let year: 11 | 12 = s.yearLevel === 12 ? 12 : 11;
      try {
        const cls = await store.getClassInfo(s.classId);
        if (cls?.yearLevel === 12 || cls?.yearLevel === 11) year = cls.yearLevel;
      } catch {
        /* keep fallback */
      }
      if (cancelled) return;
      setYearLevel(year);
      const yearUnits = unitsForYear(year);
      setSelection(loadSelection(yearUnits));
      const defaultInclude: Include = {};
      for (const p of presetsForYear(year)[0].plans) {
        const cur = defaultInclude[p.unit] ?? { source: false, essay: false };
        cur[p.kind] = true;
        defaultInclude[p.unit] = cur;
      }
      setInclude(loadInclude(yearUnits, defaultInclude));
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

  // Progress: which syllabus topics each paper actually tested (its source
  // sets, plus the essays the student chose), and how much they wrote.
  const progress = useMemo(() => {
    const chrono = attempts.slice().sort((a, b) => a.createdAt - b.createdAt);
    const counts = new Map<SyllabusPointId, number>();
    for (const a of chrono) {
      for (const t of coveredPoints(a)) counts.set(t, (counts.get(t) ?? 0) + 1);
    }
    const trend = chrono.map((a) => ({
      id: a.id,
      date: a.createdAt,
      submitted: a.status === 'submitted',
      words: attemptWords(a.sections),
    }));
    return { counts, trend };
  }, [attempts]);

  const plans = useMemo(() => includeToPlans(include), [include]);
  const marks = useMemo(() => planMarks(plans), [plans]);
  const activePreset = presets.find((p) => {
    const inc: Include = {};
    for (const pl of p.plans) {
      const cur = inc[pl.unit] ?? { source: false, essay: false };
      cur[pl.kind] = true;
      inc[pl.unit] = cur;
    }
    return sameInclude(inc, include, units) && (timer.mode === 'off' || timer.totalMinutes === p.minutes);
  });

  function toggle(unitId: string, id: SyllabusPointId) {
    setSelection((cur) => {
      const list = cur[unitId] ?? [];
      return {
        ...cur,
        [unitId]: list.includes(id) ? list.filter((x) => x !== id) : [...list, id],
      };
    });
  }

  function applyPreset(presetId: string) {
    const p = presets.find((x) => x.id === presetId);
    if (!p) return;
    const inc: Include = {};
    for (const u of units) inc[u.id] = { source: false, essay: false };
    for (const pl of p.plans) inc[pl.unit]![pl.kind] = true;
    setInclude(inc);
    setTimer((t) => ({ ...t, totalMinutes: p.minutes }));
    setGenError('');
  }

  function toggleSection(unitId: UnitId, kind: 'source' | 'essay') {
    setInclude((cur) => {
      const next: Include = { ...cur };
      const p = { source: false, essay: false, ...next[unitId] };
      p[kind] = !p[kind];
      next[unitId] = p;
      const newPlans = includeToPlans(next);
      if (newPlans.length > 0) {
        setTimer((t) => ({ ...t, totalMinutes: suggestedDuration(planMarks(newPlans)) }));
      }
      return next;
    });
    setGenError('');
  }

  async function startExam() {
    if (!student) return;
    setGenError('');
    if (plans.length === 0) {
      setGenError('Choose at least one section — tick a source analysis or an essay above.');
      return;
    }
    setBusy(true);
    try {
      localStorage.setItem(KEY_SYLLABUS_V2, JSON.stringify(selection));
      localStorage.setItem(KEY_TIMER, JSON.stringify(timer));
      localStorage.setItem(KEY_PLAN, JSON.stringify(include));
      // Seen material: everything from previous attempts, oldest first so the
      // generator reuses the longest-ago sets when the bank is exhausted.
      const seen = seenMaterial(attempts);
      const checked = plans
        .map((p) => p.unit)
        .filter((u, i, arr) => arr.indexOf(u) === i)
        .flatMap((u) => selection[u] ?? []);
      const sections = generateExam(plans, checked, seen.sets, seen.essays);
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
        syllabusPoints: checked,
        sections,
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
    await store.deleteAttempt(a.id);
    setAttempts((cur) => cur.filter((x) => x.id !== a.id));
    setDeleting(null);
  }

  if (loading || !student) {
    return <Loading text="Loading your exams…" />;
  }

  const sectionSplit =
    timer.mode !== 'off' && plans.length > 1
      ? splitMinutes(plans.map((p) => (p.kind === 'source' ? 20 : 30)), timer.totalMinutes)
      : null;

  return (
    <div className="page">
      <div className="masthead">
        <div>
          <div className="brand">
            <Link to="/dashboard">Essay &amp; Sauce</Link>
          </div>
          <div className="sub">
            Year {yearLevel} ·{' '}
            {units.map((u) => u.name + ' (Sem ' + u.semester + ')').join(' · ')}
          </div>
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
        <div className="empty first-run">
          <p><strong>Welcome! Here’s how it works:</strong></p>
          <ol>
            <li>Press <strong>Start a new practice exam</strong> above.</li>
            <li>Choose your paper — one unit or both, and which sections — then tick the syllabus
              topics your class has covered. Your paper only draws on those.</li>
            <li>Write your answers right on the page. Everything saves automatically, so you can
              leave and come back any time.</li>
            <li>After you submit, you can review your answers next to the real marking keys — and
              your teacher can mark the paper and return feedback.</li>
          </ol>
        </div>
      ) : (
        <div className="attempt-list">
          {attempts.map((a) => {
            const sets = a.sections
              .filter((s) => s.kind === 'source')
              .map((s) => (s.kind === 'source' ? getSourceSet(s.sourceSetId)?.title : ''))
              .filter(Boolean);
            const words = attemptWords(a.sections);
            const total = paperMarks(a.sections);
            return (
              <div className="attempt-row" key={a.id}>
                <div>
                  <div className="title">{paperLabel(a.sections)}</div>
                  <div className="meta">
                    {sets.length > 0 ? sets.join(' · ') + ' — ' : ''}
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
                      {feedbackComplete(a.feedback, a.sections)
                        ? 'Marked · ' + feedbackTotal(a.feedback) + '/' + total
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
                  <button className="danger-ghost" title="Delete this exam" onClick={() => setDeleting(a)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {attempts.length > 0 && (
        <div className="progress-panel">
          <h3>Your progress</h3>
          <div className="progress-grid">
            <div>
              {units.map((unit) => {
                const indIds = individualIds(unit);
                const individualsCount = indIds.reduce(
                  (n, id) => n + (progress.counts.get(id) ?? 0),
                  0,
                );
                return (
                  <div key={unit.id} style={{ marginBottom: 14 }}>
                    <div className="label">{unit.name} — topics you’ve practised</div>
                    <div className="topic-chips">
                      {unit.syllabus.map((p) => {
                        const n = progress.counts.get(p.id) ?? 0;
                        return (
                          <span
                            key={p.id}
                            className={'topic-chip' + (n > 0 ? ' done' : '')}
                            title={p.full + ' — practised in ' + n + ' paper' + (n === 1 ? '' : 's')}
                          >
                            {p.short}
                            <b>{n}</b>
                          </span>
                        );
                      })}
                      {indIds.length > 0 && (
                        <span
                          className={'topic-chip' + (individualsCount > 0 ? ' done' : '')}
                          title={'Questions on significant individuals — practised in ' + individualsCount + ' paper' + (individualsCount === 1 ? '' : 's')}
                        >
                          Significant individuals
                          <b>{individualsCount}</b>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="progress-note">
                A topic counts when a paper’s sources or your chosen essay tested it. Grey topics
                are waiting for their first paper — worth a revisit before the real exam.
              </div>
            </div>
            <div>
              <div className="label">Words written per paper</div>
              <div className="trend" role="img" aria-label={'Words written across ' + progress.trend.length + ' papers'}>
                {progress.trend.map((t) => {
                  const max = Math.max(...progress.trend.map((x) => x.words), 1);
                  return (
                    <div className="trend-col" key={t.id} title={t.words + ' words · ' + fmtDate(t.date)}>
                      <span className="count">{t.words}</span>
                      <div
                        className={'bar' + (t.submitted ? '' : ' open')}
                        style={{ height: Math.max(6, Math.round((t.words / max) * 72)) + 'px' }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="progress-note">
                Each bar is one paper, oldest first. Paler bars are still in progress. Watching this
                grow across a term is the point — little and often beats one big cram.
              </div>
            </div>
          </div>
        </div>
      )}

      {deleting && (
        <ConfirmDialog
          title={'Delete ' + (deleting.status === 'submitted' ? 'this submitted exam' : 'this in-progress exam') + '?'}
          body={
            'Your paper (' + paperLabel(deleting.sections) +
            ') will be permanently removed, including everything you wrote. This cannot be undone.'
          }
          actionLabel="Delete exam"
          danger
          onCancel={() => setDeleting(null)}
          onConfirm={() => deleteAttempt(deleting)}
        />
      )}

      {showModal && (
        <div className="modal-scrim" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Build your paper</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14.5 }}>
              Pick a ready-made paper, or mix your own sections below.
            </p>
            <div className="preset-row">
              {presets.map((p) => (
                <button
                  key={p.id}
                  className={'preset-card' + (activePreset?.id === p.id ? ' selected' : '')}
                  onClick={() => applyPreset(p.id)}
                  title={p.help}
                >
                  <strong>{p.label}</strong>
                  <span>{p.help}</span>
                </button>
              ))}
            </div>

            <div className="unit-grid">
              {units.map((unit) => (
                <div className="unit-card" key={unit.id}>
                  <div className="unit-name">
                    <strong>{unit.short}</strong>
                    <span>Semester {unit.semester} · {unit.electiveLabel}</span>
                  </div>
                  <label className="syllabus-item compact">
                    <input
                      type="checkbox"
                      checked={!!include[unit.id]?.source}
                      onChange={() => toggleSection(unit.id, 'source')}
                    />
                    <span><strong>Source analysis</strong> — 3 sources, 3 questions (20 marks)</span>
                  </label>
                  <label className="syllabus-item compact">
                    <input
                      type="checkbox"
                      checked={!!include[unit.id]?.essay}
                      onChange={() => toggleSection(unit.id, 'essay')}
                    />
                    <span><strong>Essay</strong> — one question chosen from three (30 marks)</span>
                  </label>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14 }}>
              {plans.length === 0
                ? 'Nothing selected yet — tick at least one section.'
                : 'Your paper: ' +
                  plans.length + ' section' + (plans.length === 1 ? '' : 's') +
                  ' · ' + marks + ' marks.'}
            </p>

            {units.map((unit) => {
              const included = !!include[unit.id]?.source || !!include[unit.id]?.essay;
              if (!included) return null;
              const sel = selection[unit.id] ?? [];
              const indIds = individualIds(unit);
              return (
                <details className="unit-topics" key={unit.id}>
                  <summary>
                    <strong>{unit.short}</strong> — topics covered so far
                    <span className="count">
                      {sel.length}/{unitPointIds(unit).length} ticked
                    </span>
                  </summary>
                  <p style={{ color: 'var(--ink-soft)', fontSize: 14 }}>
                    Un-tick any syllabus points your class has <strong>not</strong> covered yet.
                    Your paper only draws on the topics left ticked.
                  </p>
                  {unit.syllabus.map((p) => (
                    <label className="syllabus-item" key={p.id}>
                      <input
                        type="checkbox"
                        checked={sel.includes(p.id)}
                        onChange={() => toggle(unit.id, p.id)}
                      />
                      <span>
                        <strong>{p.short}</strong>
                        <div className="full">{p.full}</div>
                      </span>
                    </label>
                  ))}
                  {indIds.length > 0 && (
                    <>
                      <label className="syllabus-item">
                        <input
                          type="checkbox"
                          checked={indIds.every((id) => sel.includes(id))}
                          ref={(el) => {
                            if (el) {
                              const some = indIds.some((id) => sel.includes(id));
                              const all = indIds.every((id) => sel.includes(id));
                              el.indeterminate = some && !all;
                            }
                          }}
                          onChange={() => {
                            const all = indIds.every((id) => sel.includes(id));
                            setSelection((cur) => ({
                              ...cur,
                              [unit.id]: all
                                ? (cur[unit.id] ?? []).filter((id) => !indIds.includes(id))
                                : [...(cur[unit.id] ?? []).filter((id) => !indIds.includes(id)), ...indIds],
                            }));
                          }}
                        />
                        <span>
                          <strong>Significant individuals</strong>
                          <div className="full">{unit.individualsBlurb}</div>
                        </span>
                      </label>
                      <div className="individuals-grid">
                        {unit.individuals.map((person) => (
                          <label className="individual-item" key={person.id}>
                            <input
                              type="checkbox"
                              checked={sel.includes(person.id)}
                              onChange={() => toggle(unit.id, person.id)}
                            />
                            <span>{person.name}</span>
                          </label>
                        ))}
                      </div>
                    </>
                  )}
                </details>
              );
            })}

            <h3 className="modal-section">How long have you got?</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14.5 }}>
              {yearLevel === 11
                ? 'The Year 11 end-of-year exam allows 2½ hours for its three sections. Shorter settings are useful for drilling one section under pressure.'
                : 'The real WACE exam allows three hours of working time. Shorter settings are useful for drilling one section under pressure.'}
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
                      {m % 60 === 0 ? m / 60 + ' h' : m < 60 ? m + ' min' : Math.floor(m / 60) + '½ h'}
                    </button>
                  ))}
                </div>
                <div className="duration-note">
                  {describeDuration(timer.totalMinutes)} for {marks} marks.
                  {sectionSplit &&
                    ' Suggested split: ' +
                    plans
                      .map((p, i) => sectionSplit[i] + ' min ' + (p.kind === 'source' ? 'sources' : 'essay'))
                      .join(', ') + '.'}
                  {timer.mode === 'strict' && ' The paper submits itself when the clock hits zero.'}
                </div>
              </div>
            )}
            {genError && <div className="form-error">{genError}</div>}
            <div className="actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button className="primary" onClick={startExam} disabled={busy || plans.length === 0}>
                {busy ? 'Building your exam…' : 'Generate my exam'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
