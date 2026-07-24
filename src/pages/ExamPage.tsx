import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EssayRubric, SAQuestionText, SourceCard } from '../components/ExamParts';
import { ConfirmDialog, Loading } from '../components/Feedback';
import { getEssay, getSourceSet } from '../data/bank';
import type { Answers, Attempt, ExamTiming } from '../data/types';
import { wordCount, wordTarget, wordZone } from '../lib/format';
import {
  HEARTBEAT_MS,
  clock,
  describeDuration,
  elapsed,
  limitMs,
  modeBlurb,
  modeLabel,
  remaining,
  reopenTiming,
  shortDuration,
  startTiming,
  stopTiming,
} from '../lib/timing';
import { getStore } from '../store';

type SaveState = 'saved' | 'pending' | 'saving';

const IDLE_SAVE_MS = 2500; // save this long after the last keystroke
const MAX_SAVE_GAP_MS = 15000; // …but at least this often while typing

/** Minutes-remaining marks at which the room gets an announcement, as a
 *  supervisor would give. Largest first. */
const ANNOUNCE_AT = [30, 10, 5];

const WARNING_MS = 10 * 60_000;
const CRITICAL_MS = 5 * 60_000;

function announceText(mins: number, mode: ExamTiming['mode']): string {
  const head =
    mins === 30 ? 'Thirty minutes' : mins === 10 ? 'Ten minutes' : mins + ' minutes';
  if (mins === 5) {
    return (
      head +
      ' of working time remaining — start bringing your answer to a close.' +
      (mode === 'strict' ? ' The paper submits itself at zero.' : '')
    );
  }
  return head + ' of working time remaining.';
}

/** The countdown in the top bar. */
function TimerChip({ timing, now }: { timing: ExamTiming; now: number }) {
  if (timing.mode === 'off') {
    return (
      <span className="timer-chip untimed" title="Untimed practice — this is your working time so far">
        {clock(elapsed(timing, now))}
      </span>
    );
  }
  const left = remaining(timing, now);
  const state =
    left <= 0 ? ' over' : left <= CRITICAL_MS ? ' critical' : left <= WARNING_MS ? ' warning' : '';
  return (
    <span
      className={'timer-chip' + state}
      title={modeLabel(timing.mode) + ' — ' + describeDuration(timing.totalMinutes) + ' of working time'}
    >
      {left <= 0 ? '+' + clock(-left) + ' over' : clock(left)}
    </span>
  );
}

/** Shown instead of the paper whenever a timed clock is stopped: before the
 *  first start, after a pause, and when picking the exam back up later. */
function ClockGate({
  timing,
  onStart,
  onExit,
}: {
  timing: ExamTiming;
  onStart: () => void;
  onExit: () => void;
}) {
  const first = timing.startedAt === null;
  const left = remaining(timing);
  const over = left <= 0;
  const sectionTwo = timing.totalMinutes - timing.sectionOneMinutes;
  return (
    <div className="page narrow">
      <div className="clock-gate">
        <div className="eyebrow">{modeLabel(timing.mode)}</div>
        <h2>{first ? 'Ready when you are' : over ? 'Paused in overtime' : 'Clock paused'}</h2>
        <div className={'big-clock' + (over ? ' over' : '')}>
          {over ? '+' + clock(-left) : clock(left)}
        </div>
        <div className="clock-sub">
          {first
            ? describeDuration(timing.totalMinutes) + ' of working time'
            : over
              ? 'past the ' + describeDuration(timing.totalMinutes) + ' allowed'
              : 'remaining of ' + describeDuration(timing.totalMinutes)}
        </div>
        <p className="blurb">{modeBlurb(timing.mode)}</p>
        <div className="split">
          <div>
            <strong>Section One</strong>
            <span>Source analysis · 20 marks</span>
            <span>suggested {timing.sectionOneMinutes} min</span>
          </div>
          <div>
            <strong>Section Two</strong>
            <span>Essay · 30 marks</span>
            <span>suggested {sectionTwo} min</span>
          </div>
        </div>
        <p className="blurb">
          The clock only runs while this page is open. If you close it, it stops — but your teacher
          can see how long the paper really took.
        </p>
        <div className="actions">
          <button className="primary big" onClick={onStart}>
            {first ? 'Start the clock' : 'Resume the clock'}
          </button>
          <button onClick={onExit}>Back to dashboard</button>
        </div>
      </div>
    </div>
  );
}

export function ExamPage() {
  const { id } = useParams<{ id: string }>();
  const store = getStore();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [missing, setMissing] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>('saved');
  const [saveIssue, setSaveIssue] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [announcement, setAnnouncement] = useState<string | null>(null);
  const [confirmSubmit, setConfirmSubmit] = useState<string | null>(null);
  const [confirmLeave, setConfirmLeave] = useState(false);
  const pendingRef = useRef<Partial<Attempt>>({});
  const timerRef = useRef<number | null>(null);
  const lastSaveRef = useRef(Date.now());
  // Mirrors `attempt` for callbacks that must not close over a stale render.
  const attemptRef = useRef<Attempt | null>(null);
  const submittingRef = useRef(false);
  const prevRemainingRef = useRef<number | null>(null);

  const flush = useCallback(async () => {
    if (!id) return;
    const patch = pendingRef.current;
    if (Object.keys(patch).length === 0) {
      setSaveState('saved');
      return;
    }
    pendingRef.current = {};
    setSaveState('saving');
    try {
      await store.updateAttempt(id, patch);
      lastSaveRef.current = Date.now();
      setSaveState(Object.keys(pendingRef.current).length > 0 ? 'pending' : 'saved');
      setSaveIssue(false);
    } catch {
      pendingRef.current = { ...patch, ...pendingRef.current };
      setSaveState('pending');
      setSaveIssue(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const queue = useCallback(
    (patch: Partial<Attempt>) => {
      setAttempt((a) => (a ? { ...a, ...patch } : a));
      if (attemptRef.current) attemptRef.current = { ...attemptRef.current, ...patch };
      pendingRef.current = { ...pendingRef.current, ...patch };
      setSaveState('pending');
      if (timerRef.current) window.clearTimeout(timerRef.current);
      const overdue = Date.now() - lastSaveRef.current > MAX_SAVE_GAP_MS;
      timerRef.current = window.setTimeout(() => void flush(), overdue ? 0 : IDLE_SAVE_MS);
    },
    [flush],
  );

  // Clock changes are written straight through rather than queued: they are
  // rare, and they must not wait behind the typing debounce.
  const writeTiming = useCallback(
    (next: ExamTiming) => {
      setAttempt((a) => (a ? { ...a, timing: next } : a));
      if (attemptRef.current) attemptRef.current = { ...attemptRef.current, timing: next };
      if (id) void store.updateAttempt(id, { timing: next }).catch(() => {});
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  const stopClock = useCallback(() => {
    const cur = attemptRef.current?.timing;
    if (!cur || cur.runningSince === null) return;
    writeTiming(stopTiming(cur));
  }, [writeTiming]);

  const autoSubmit = useCallback(async () => {
    const cur = attemptRef.current;
    const t = cur?.timing;
    if (!cur || !t || submittingRef.current) return;
    submittingRef.current = true;
    const stopped: ExamTiming = {
      ...t,
      elapsedMs: limitMs(t),
      runningSince: null,
      expiredAt: t.expiredAt ?? Date.now(),
      autoSubmitted: true,
    };
    queue({ status: 'submitted', submittedAt: Date.now(), timing: stopped });
    await flush();
    navigate('/attempt/' + cur.id, { replace: true });
  }, [queue, flush, navigate]);

  useEffect(() => {
    if (!id) return;
    store.getAttempt(id).then((a) => {
      if (!a) {
        setMissing(true);
        return;
      }
      if (a.status === 'submitted') {
        navigate('/attempt/' + a.id, { replace: true });
        return;
      }
      const timing = reopenTiming(a.timing);
      const fresh = timing ? { ...a, timing } : a;
      setAttempt(fresh);
      attemptRef.current = fresh;
      if (timing && timing !== a.timing) void store.updateAttempt(a.id, { timing }).catch(() => {});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    attemptRef.current = attempt;
  }, [attempt]);

  const running = attempt?.timing?.runningSince != null;

  // Tick once a second while the clock runs.
  useEffect(() => {
    if (!running) return;
    setNow(Date.now());
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, [running]);

  // Roll the running clock into storage periodically, so a crash or a killed
  // tab costs at most one heartbeat of working time.
  useEffect(() => {
    if (!running) return;
    const t = window.setInterval(() => {
      const cur = attemptRef.current?.timing;
      if (!cur || cur.runningSince === null) return;
      const at = Date.now();
      writeTiming({ ...cur, elapsedMs: elapsed(cur, at), runningSince: at });
    }, HEARTBEAT_MS);
    return () => window.clearInterval(t);
  }, [running, writeTiming]);

  // Announcements, expiry and (in strict mode) the automatic submit.
  useEffect(() => {
    const t = attemptRef.current?.timing;
    if (!t || t.mode === 'off' || t.runningSince === null) return;
    const left = remaining(t, now);
    const prev = prevRemainingRef.current;
    prevRemainingRef.current = left;

    if (left <= 0) {
      if (t.mode === 'strict') {
        void autoSubmit();
        return;
      }
      if (t.expiredAt === null) writeTiming({ ...t, expiredAt: Date.now() });
      if (prev !== null && prev > 0) {
        setAnnouncement(
          'Time is up. In the real exam you would stop writing now — anything from here is overtime.',
        );
      }
      return;
    }
    if (prev === null) return; // first tick of this run: nothing was crossed
    for (const mins of ANNOUNCE_AT) {
      const mark = mins * 60_000;
      // Skip marks the paper was never long enough to reach.
      if (prev > mark && left <= mark && limitMs(t) > mark + 60_000) {
        setAnnouncement(announceText(mins, t.mode));
        break;
      }
    }
  }, [now, autoSubmit, writeTiming]);

  useEffect(() => {
    if (!announcement) return;
    const t = window.setTimeout(() => setAnnouncement(null), 15000);
    return () => window.clearTimeout(t);
  }, [announcement]);

  // Flush and stop the clock when the tab is hidden or the page goes away.
  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') void flush();
    };
    const onPageHide = () => {
      void flush();
      stopClock();
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', onPageHide);
      void flush();
      stopClock();
    };
  }, [flush, stopClock]);

  if (missing) {
    return (
      <div className="page narrow">
        <p>This exam could not be found.</p>
        <button onClick={() => navigate('/dashboard')}>Back to dashboard</button>
      </div>
    );
  }
  if (!attempt) return <Loading text="Loading your exam…" />;

  const sourceSet = getSourceSet(attempt.sourceSetId);
  const essays = attempt.essayIds.map((eid) => getEssay(eid));
  if (!sourceSet || essays.some((e) => !e)) {
    return (
      <div className="page narrow">
        <p>This exam references questions that are no longer in the bank.</p>
        <button onClick={() => navigate('/dashboard')}>Back to dashboard</button>
      </div>
    );
  }

  const timing = attempt.timing ?? null;
  const timed = timing !== null && timing.mode !== 'off';
  const used = timing ? elapsed(timing, now) : 0;
  const left = timing ? remaining(timing, now) : Number.POSITIVE_INFINITY;
  const overtime = timed && left <= 0;

  const setAnswer = (letter: keyof Answers, value: string) => {
    queue({ answers: { ...attempt.answers, [letter]: value } });
  };

  const setPage = (page: 1 | 2) => {
    queue({ page });
    void flush();
    window.scrollTo({ top: 0 });
  };

  function startClock() {
    const t = attemptRef.current?.timing;
    if (!t) return;
    prevRemainingRef.current = null;
    writeTiming(startTiming(t));
  }

  function pauseClock() {
    stopClock();
    prevRemainingRef.current = null;
  }

  async function saveAndExit() {
    if (timed && !overtime && timing!.mode === 'strict' && timing!.runningSince !== null) {
      setConfirmLeave(true);
      return;
    }
    await leaveNow();
  }

  async function leaveNow() {
    stopClock();
    await flush();
    navigate('/dashboard');
  }

  function submit() {
    const essayWords = wordCount(attempt!.essayText);
    const saWords =
      wordCount(attempt!.answers.a) + wordCount(attempt!.answers.b) + wordCount(attempt!.answers.c);
    const warnings: string[] = [];
    if (attempt!.essayChoice === null) warnings.push('you have not chosen an essay question');
    if (saWords === 0) warnings.push('your source analysis answers are empty');
    if (essayWords === 0) warnings.push('your essay is empty');
    setConfirmSubmit(
      warnings.length > 0
        ? 'Heads up: ' + warnings.join('; ') + '. You cannot edit after submitting.'
        : 'Your work will be handed in for marking. You cannot edit after submitting.',
    );
  }

  async function submitNow() {
    const cur = attemptRef.current?.timing;
    queue({
      status: 'submitted',
      submittedAt: Date.now(),
      ...(cur ? { timing: stopTiming(cur) } : {}),
    });
    await flush();
    navigate('/attempt/' + attempt!.id);
  }

  // A stopped clock means the paper is not being sat right now: show the gate
  // rather than the questions.
  if (timed && timing!.runningSince === null && !submittingRef.current) {
    return <ClockGate timing={timing!} onStart={startClock} onExit={() => void saveAndExit()} />;
  }

  const saveLabel = saveIssue
    ? 'Saving is retrying…'
    : saveState === 'saved'
      ? 'Saved ✓'
      : saveState === 'saving'
        ? 'Saving…'
        : 'Typing…';
  const sectionOneMs = timed ? timing!.sectionOneMinutes * 60_000 : 0;
  const pastSectionOne = timed && used > sectionOneMs;
  const sectionTwoMinutes = timed ? timing!.totalMinutes - timing!.sectionOneMinutes : 0;

  return (
    <div>
      <div className="exam-topbar">
        <div className="left">
          <span className="title">Practice Examination</span>
          <div className="pages">
            <button className={attempt.page === 1 ? 'active' : ''} onClick={() => setPage(1)}>
              Section One — Source Analysis
            </button>
            <button className={attempt.page === 2 ? 'active' : ''} onClick={() => setPage(2)}>
              Section Two — Essay
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {timing && <TimerChip timing={timing} now={now} />}
          {timing?.mode === 'practice' && (
            <button onClick={pauseClock} title="Stop the clock and hide the paper">
              Pause
            </button>
          )}
          <span
            className={'save-state' + (saveIssue ? ' issue' : saveState !== 'saved' ? ' saving' : '')}
            role="status"
            title={saveIssue ? 'Your work is kept on this device and will be saved as soon as the connection returns.' : 'Everything you type is saved automatically.'}
          >
            {saveLabel}
          </span>
          <button onClick={saveAndExit}>Save &amp; exit</button>
        </div>
      </div>

      {announcement && (
        <div className="announce-bar" role="status">
          <span>{announcement}</span>
          <button onClick={() => setAnnouncement(null)} aria-label="Dismiss">
            ✕
          </button>
        </div>
      )}

      <div className="exam-paper">
        <div className="paper-head">
          <div className="exam-title">Modern History — Nazism in Germany</div>
          <div className="exam-sub">
            {attempt.page === 1
              ? 'Section One: Source Analysis — 20 marks'
              : 'Section Two: Essay — 30 marks'}
            {' · '}
            {attempt.studentName}
          </div>
        </div>

        {overtime && timing!.mode === 'practice' && (
          <div className="time-up-banner">
            <strong>Time is up.</strong> In the real exam you would have stopped writing{' '}
            {shortDuration(-left)} ago. Finish if you need to — your overtime is recorded, so you can
            see what to trim next time.
          </div>
        )}

        {attempt.page === 1 ? (
          <div className="paper-body">
            <p className="section-note">
              Examine Sources 1, 2 and 3 and answer all three questions. Type each answer in the
              space beneath its question. Sources are constructed for skills practice in the style
              of the period.
            </p>
            {timed && (
              <div className={'section-timing' + (pastSectionOne && !overtime ? ' over' : '')}>
                Suggested time for this section: <strong>{timing!.sectionOneMinutes} minutes</strong>{' '}
                of {describeDuration(timing!.totalMinutes)}.{' '}
                {pastSectionOne
                  ? 'You have used ' + shortDuration(used) + ' — aim to move on to Section Two.'
                  : 'You have used ' + shortDuration(used) + '.'}
              </div>
            )}
            {sourceSet.sources.map((s) => (
              <SourceCard key={s.n} source={s} />
            ))}
            {sourceSet.questions.map((q) => (
              <div className="question-block" key={q.letter}>
                <SAQuestionText q={q} />
                <textarea
                  rows={q.letter === 'c' ? 14 : q.letter === 'b' ? 10 : 6}
                  value={attempt.answers[q.letter]}
                  onChange={(e) => setAnswer(q.letter, e.target.value)}
                  placeholder={'Type your answer to question (' + q.letter + ') here…'}
                />
                <div className="answer-meta">
                  <span>
                    {q.marks} mark{q.marks === 1 ? '' : 's'} · aim for ~
                    {wordTarget(q.letter, q.marks)[0]}–{wordTarget(q.letter, q.marks)[1]} words
                  </span>
                  <span
                    className={'wc wc-' + wordZone(wordCount(attempt.answers[q.letter]), wordTarget(q.letter, q.marks))}
                  >
                    {wordCount(attempt.answers[q.letter])} words
                  </span>
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'right', marginTop: 20 }}>
              <button className="primary big" onClick={() => setPage(2)}>
                Continue to Section Two →
              </button>
            </div>
          </div>
        ) : (
          <div className="paper-body">
            <p className="section-note">
              Choose <strong>one</strong> of the three questions below and write an extended answer.
              Your essay should be a sustained argument supported by detailed and accurate evidence.
            </p>
            {timed && (
              <div className={'section-timing' + (overtime ? ' over' : '')}>
                Suggested time for this section: <strong>{sectionTwoMinutes} minutes</strong>.{' '}
                {overtime
                  ? 'You are into overtime.'
                  : shortDuration(left) + ' of working time remaining.'}
              </div>
            )}
            {essays.map((e, i) => (
              <label
                key={e!.id}
                className={'essay-choice' + (attempt.essayChoice === i ? ' selected' : '')}
              >
                <input
                  type="radio"
                  name="essayChoice"
                  checked={attempt.essayChoice === i}
                  onChange={() => queue({ essayChoice: i })}
                />
                <span>
                  <strong>Question {i + 1}.</strong> {e!.text}{' '}
                  <span className="marks">(30 marks)</span>
                </span>
              </label>
            ))}
            <EssayRubric />
            <div className="question-block">
              <div className="question-text">
                <span className="qletter">Your essay</span>
                {attempt.essayChoice === null && (
                  <span className="marks">— select a question above first</span>
                )}
              </div>
              <textarea
                rows={26}
                value={attempt.essayText}
                onChange={(e) => queue({ essayText: e.target.value })}
                placeholder="Plan briefly, then write your essay here…"
              />
              <div className="answer-meta">
                <span>
                  A sustained, structured argument — aim for ~{wordTarget('essay', 30)[0]}–
                  {wordTarget('essay', 30)[1]} words
                </span>
                <span className={'wc wc-' + wordZone(wordCount(attempt.essayText), wordTarget('essay', 30))}>
                  {wordCount(attempt.essayText)} words
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
              <button onClick={() => setPage(1)}>← Back to Section One</button>
              <button className="primary big" onClick={submit}>
                Submit exam
              </button>
            </div>
          </div>
        )}
      </div>

      {confirmSubmit !== null && (
        <ConfirmDialog
          title="Submit this exam?"
          body={confirmSubmit}
          actionLabel="Submit for marking"
          onCancel={() => setConfirmSubmit(null)}
          onConfirm={submitNow}
        />
      )}
      {confirmLeave && (
        <ConfirmDialog
          title="Leave the exam room?"
          body="You are sitting this paper under exam conditions. Leaving stops the clock, and your teacher can see that the exam was left and how long it really took."
          actionLabel="Leave anyway"
          danger
          onCancel={() => setConfirmLeave(false)}
          onConfirm={leaveNow}
        />
      )}
    </div>
  );
}
