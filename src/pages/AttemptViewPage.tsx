import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  EssayNotes,
  EssayRubric,
  MarkersNotesKey,
  MarkingKey,
  MarkingKeyPicker,
  SAQuestionText,
  SourceCard,
} from '../components/ExamParts';
import { getEssay, getSourceSet } from '../data/bank';
import type { Attempt, FeedbackPart, TeacherFeedback } from '../data/types';
import { feedbackComplete, feedbackTotal, fmtDate, timeAgo, wordCount } from '../lib/format';
import {
  isChecklist,
  picksTotal,
  rowCount,
  sectionStarts,
  sectionsFor,
} from '../lib/marking';
import {
  clock,
  describeDuration,
  elapsed,
  limitMs,
  modeLabel,
  remaining,
  shortDuration,
  timeAway,
} from '../lib/timing';
import { getStore } from '../store';

const EMPTY_FEEDBACK: TeacherFeedback = {
  marks: { a: null, b: null, c: null, essay: null },
  comments: { a: '', b: '', c: '', essay: '' },
  picks: { a: [], b: [], c: [], essay: [] },
  overall: '',
  returnedAt: null,
  updatedAt: 0,
};

function AnswerBlock({ text }: { text: string }) {
  return text.trim() ? (
    <div className="student-answer">{text}</div>
  ) : (
    <div className="student-answer empty-answer">No answer written.</div>
  );
}

/** Read-only feedback box shown to the student once feedback is returned. */
function FeedbackBox({ fb, part, max }: { fb: TeacherFeedback; part: FeedbackPart; max: number }) {
  const mark = fb.marks[part];
  const comment = fb.comments[part].trim();
  if (mark === null && !comment) return null;
  return (
    <div className="teacher-feedback">
      <div className="label">
        Teacher’s feedback{mark !== null ? ` — ${mark} / ${max} marks` : ''}
      </div>
      {comment && <div>{comment}</div>}
    </div>
  );
}

/** How the clock went: shown to the student on review, and to the teacher
 *  while marking or watching live. */
function TimingSummary({ attempt }: { attempt: Attempt }) {
  const t = attempt.timing;
  if (!t) return null;
  const live = attempt.status === 'in-progress';
  const used = elapsed(t);
  const away = timeAway(t, attempt.submittedAt);
  const over = t.mode !== 'off' && t.expiredAt !== null ? Math.max(0, used - limitMs(t)) : 0;

  const lines: string[] = [];
  if (live) {
    if (t.mode === 'off') {
      lines.push(shortDuration(used) + ' of working time so far.');
    } else {
      const left = remaining(t);
      lines.push(
        left > 0
          ? clock(left) + ' of working time remaining' + (t.runningSince === null ? ' — clock stopped, the exam is not open.' : '.')
          : 'Working time has run out — ' + shortDuration(-left) + ' into overtime.',
      );
    }
  } else if (t.mode === 'off') {
    lines.push('Took ' + shortDuration(used) + ' of working time (untimed).');
  } else {
    lines.push(
      'Used ' + shortDuration(used) + ' of the ' + describeDuration(t.totalMinutes) + ' allowed.',
    );
    if (t.autoSubmitted) {
      lines.push('The clock reached zero and the paper was submitted automatically.');
    } else if (over > 0) {
      lines.push('Ran ' + shortDuration(over) + ' past the time — that much would have been lost.');
    } else if (limitMs(t) - used > 60_000) {
      lines.push('Finished with ' + shortDuration(limitMs(t) - used) + ' to spare.');
    }
  }
  if (away !== null && away > 3 * 60_000) {
    lines.push(
      'Not sat in one go: ' + shortDuration(away) + ' passed with the exam closed, so the clock was stopped.',
    );
  }

  const urgent = t.autoSubmitted || over > 0;
  return (
    <div className={'timing-summary' + (urgent ? ' urgent' : '')}>
      <div className="head">
        <span className="badge timing">{modeLabel(t.mode)}</span>
        {t.mode !== 'off' && <span className="paper-length">{describeDuration(t.totalMinutes)} paper</span>}
      </div>
      <div>{lines.join(' ')}</div>
    </div>
  );
}

export function AttemptViewPage() {
  const { id } = useParams<{ id: string }>();
  const store = getStore();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [missing, setMissing] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [isTeacher, setIsTeacher] = useState(store.isTeacherSignedIn());

  // Teacher marking: a working copy of the feedback, edited locally and only
  // written back on Save/Return so the live subscription can't clobber typing.
  const [fb, setFb] = useState<TeacherFeedback | null>(null);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!id) return;
    const un = store.subscribeAttempt(id, (a) => {
      if (!a) {
        setMissing(true);
        return;
      }
      setAttempt(a);
    });
    void store.awaitAuthReady().then(() => setIsTeacher(store.isTeacherSignedIn()));
    store.getCurrentStudent().then((s) => setIsOwner(!!s));
    return un;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Keep "last activity" and the watcher's countdown moving between writes.
  const watching = attempt?.status === 'in-progress';
  useEffect(() => {
    if (!watching) return;
    const t = window.setInterval(() => setTick((x) => x + 1), 1000);
    return () => window.clearInterval(t);
  }, [watching]);

  // Seed the working copy from the stored attempt until the teacher edits it.
  useEffect(() => {
    if (attempt && !dirty) setFb(attempt.feedback ?? EMPTY_FEEDBACK);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  // A student who opens their own in-progress attempt belongs in the editor.
  useEffect(() => {
    if (attempt && attempt.status === 'in-progress' && !isTeacher && isOwner) {
      navigate('/exam/' + attempt.id, { replace: true });
    }
  }, [attempt, isTeacher, isOwner, navigate]);

  if (missing) {
    return (
      <div className="page narrow">
        <p>This attempt could not be found (or you do not have access to it).</p>
        <Link to="/">Back to start</Link>
      </div>
    );
  }
  if (!attempt) return <div className="page narrow">Loading…</div>;

  const sourceSet = getSourceSet(attempt.sourceSetId);
  const essays = attempt.essayIds.map((eid) => getEssay(eid));
  if (!sourceSet || essays.some((e) => !e)) {
    return <div className="page narrow">This attempt references questions no longer in the bank.</div>;
  }

  const live = attempt.status === 'in-progress';
  const chosenEssay = attempt.essayChoice !== null ? essays[attempt.essayChoice] : null;
  const backTo = isTeacher ? '/teacher' : '/dashboard';

  const marking = isTeacher && attempt.status === 'submitted' && fb !== null;
  // What the student sees: only feedback the teacher has returned.
  const returned = !isTeacher && attempt.feedback?.returnedAt ? attempt.feedback : null;

  const maxFor = (part: FeedbackPart): number =>
    part === 'essay' ? 30 : sourceSet.questions.find((q) => q.letter === part)!.marks;

  const picksFor = (part: FeedbackPart): (number | null)[] => fb?.picks?.[part] ?? [];

  /** Change what has been picked for one part of the paper, and set the mark
   *  to what the picks now add up to (nothing picked means unmarked). The
   *  change is made inside the state update so that presses in quick
   *  succession all count. */
  function editPicks(part: FeedbackPart, change: (picks: (number | null)[]) => void) {
    setFb((cur) => {
      if (!cur) return cur;
      const sections = sectionsFor(part, sourceSet!);
      const picks = (cur.picks?.[part] ?? []).slice();
      while (picks.length < rowCount(sections)) picks.push(null);
      change(picks);
      const anything = picks.some((p) => p !== null && p !== undefined);
      return {
        ...cur,
        picks: { ...(cur.picks ?? EMPTY_FEEDBACK.picks!), [part]: picks },
        marks: { ...cur.marks, [part]: anything ? Math.min(maxFor(part), picksTotal(picks)) : null },
      };
    });
    setDirty(true);
    setSaveMsg('');
  }

  /** Press a mark button in the key: award those marks, or take them back if
   *  that button was already on. In a ladder section the award moves, since
   *  only one description there can be met. */
  function pickRow(part: FeedbackPart, section: number, row: number, marks: number) {
    const sections = sectionsFor(part, sourceSet!);
    const start = sectionStarts(sections)[section];
    const rows = sections[section].rows.length;
    const ladder = !isChecklist(sections[section]);
    editPicks(part, (picks) => {
      const already = picks[start + row] === marks;
      if (ladder) for (let i = 0; i < rows; i++) picks[start + i] = null;
      picks[start + row] = already ? null : marks;
    });
  }

  function clearSection(part: FeedbackPart, section: number) {
    const sections = sectionsFor(part, sourceSet!);
    const start = sectionStarts(sections)[section];
    const rows = sections[section].rows.length;
    editPicks(part, (picks) => {
      for (let i = 0; i < rows; i++) picks[start + i] = null;
    });
  }

  /** Wipe a part's picks: either back to unmarked, or a deliberate zero. */
  function resetPart(part: FeedbackPart, zero: boolean) {
    setFb((cur) =>
      cur
        ? {
            ...cur,
            picks: { ...(cur.picks ?? EMPTY_FEEDBACK.picks!), [part]: [] },
            marks: { ...cur.marks, [part]: zero ? 0 : null },
          }
        : cur,
    );
    setDirty(true);
    setSaveMsg('');
  }

  function setComment(part: FeedbackPart, text: string) {
    setFb((cur) => (cur ? { ...cur, comments: { ...cur.comments, [part]: text } } : cur));
    setDirty(true);
    setSaveMsg('');
  }

  async function saveFeedback(returnNow: boolean) {
    if (!attempt || !fb) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const payload: TeacherFeedback = {
        ...fb,
        returnedAt: returnNow ? fb.returnedAt ?? Date.now() : fb.returnedAt,
        updatedAt: Date.now(),
      };
      await store.updateAttempt(attempt.id, { feedback: payload });
      setFb(payload);
      setDirty(false);
      setSaveMsg(
        payload.returnedAt
          ? 'Saved — visible to ' + attempt.studentName + ' on their review page.'
          : 'Draft saved. Not visible to the student until you press “Return to student”.',
      );
    } catch (err) {
      setSaveMsg('Could not save: ' + (err instanceof Error ? err.message : 'unknown error'));
    } finally {
      setSaving(false);
    }
  }

  /** The line beside the running mark, explaining where it came from. */
  function markHint(part: FeedbackPart, mark: number | null): string {
    if (mark === null) return 'Press the marks in the key below and they are added up here.';
    const nothingPicked = picksFor(part).every((p) => p === null || p === undefined);
    if (!nothingPicked) return 'Added up from the key below.';
    if (mark === 0) return 'No marks awarded.';
    // A mark saved before the key became clickable.
    return 'Entered by hand — press marks in the key to work it out again.';
  }

  /** Teacher's marking for one part of the paper: the marking key with its
   *  numbers as buttons, the running mark those buttons add up to, and a
   *  comment for the student. */
  function markEditor(part: FeedbackPart) {
    if (!marking || !fb) return null;
    const max = maxFor(part);
    const mark = fb.marks[part];
    const sections = sectionsFor(part, sourceSet!);
    return (
      <div className="feedback-edit">
        <div className="label">Your marking</div>
        <div className="mark-total">
          <span className="score">
            {mark === null ? '–' : mark} <span className="outof">/ {max}</span>
          </span>
          <span className="how">{markHint(part, mark)}</span>
          <span className="spacer" />
          {mark !== 0 && (
            <button type="button" onClick={() => resetPart(part, true)}>
              No marks
            </button>
          )}
          {mark !== null && (
            <button type="button" onClick={() => resetPart(part, false)}>
              Start again
            </button>
          )}
        </div>
        <MarkingKeyPicker
          sections={sections}
          picks={picksFor(part)}
          onPick={(si, ri, m) => pickRow(part, si, ri, m)}
          onClearSection={(si) => clearSection(part, si)}
        />
        <textarea
          rows={2}
          placeholder="Comment for the student (optional)"
          value={fb.comments[part]}
          onChange={(e) => setComment(part, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="page">
      <div className="masthead">
        <div>
          <div className="brand">
            <Link to={backTo}>Essay &amp; Sauce</Link>
          </div>
          <div className="sub">
            {attempt.studentName} · class {attempt.classCode} · started {fmtDate(attempt.createdAt)}
            {attempt.submittedAt ? ' · submitted ' + fmtDate(attempt.submittedAt) : ''}
          </div>
        </div>
        <div className="who">
          <Link to={backTo}>← Back</Link>
        </div>
      </div>

      {live && (
        <div className="watch-banner">
          <span className="badge live">Live</span>
          <span>
            In progress — updating as {attempt.studentName} types. Last activity{' '}
            {timeAgo(attempt.updatedAt)} · currently on{' '}
            {attempt.page === 1 ? 'Section One (Source Analysis)' : 'Section Two (Essay)'}.
          </span>
        </div>
      )}

      <TimingSummary attempt={attempt} />

      {returned && (
        <div className="feedback-banner">
          <div className="total">
            {feedbackComplete(returned)
              ? 'Marked: ' + feedbackTotal(returned) + ' / 50'
              : 'Your teacher has marked part of this exam (' + feedbackTotal(returned) + ' marks so far).'}
          </div>
          <div>
            Feedback returned {fmtDate(returned.returnedAt!)} — look for the “Teacher’s feedback”
            boxes under each of your answers.
          </div>
        </div>
      )}

      <div className="paper-head">
        <div className="exam-title">Modern History — Nazism in Germany</div>
        <div className="exam-sub">Section One: Source Analysis — 20 marks</div>
      </div>
      <div className="paper-body">
        {sourceSet.sources.map((s) => (
          <SourceCard key={s.n} source={s} />
        ))}
        {sourceSet.questions.map((q) => (
          <div className="question-block" key={q.letter}>
            <SAQuestionText q={q} />
            <div className="answer-label">
              {attempt.studentName}’s answer · {wordCount(attempt.answers[q.letter])} words
            </div>
            <AnswerBlock text={attempt.answers[q.letter]} />
            {returned && <FeedbackBox fb={returned} part={q.letter} max={q.marks} />}
            {markEditor(q.letter)}
            {marking ? (
              <MarkersNotesKey
                label={'Markers’ notes — question (' + q.letter + ')'}
                notes={q.notes}
              />
            ) : (
              <MarkingKey q={q} />
            )}
          </div>
        ))}
      </div>

      <div className="paper-head" style={{ marginTop: 30 }}>
        <div className="exam-title">Section Two: Essay — 30 marks</div>
        <div className="exam-sub">One question chosen from three</div>
      </div>
      <div className="paper-body">
        {essays.map((e, i) => (
          <div
            className={'essay-choice' + (attempt.essayChoice === i ? ' selected' : '')}
            key={e!.id}
            style={{ cursor: 'default' }}
          >
            <span>
              <strong>Question {i + 1}.</strong> {e!.text} <span className="marks">(30 marks)</span>
              {attempt.essayChoice === i && (
                <span className="frame-tag">✔ chosen by {attempt.studentName}</span>
              )}
            </span>
          </div>
        ))}
        <div className="question-block">
          <div className="answer-label">
            {attempt.studentName}’s essay · {wordCount(attempt.essayText)} words
          </div>
          <AnswerBlock text={attempt.essayText} />
          {returned && <FeedbackBox fb={returned} part="essay" max={30} />}
          {markEditor('essay')}
        </div>
        {!marking && <EssayRubric />}
        {chosenEssay && (
          <details className="key">
            <summary>Markers’ notes for the chosen question</summary>
            <div className="key-inner">
              <EssayNotes notes={chosenEssay.notes} />
            </div>
          </details>
        )}
      </div>

      {returned && returned.overall.trim() && (
        <div className="paper-body" style={{ marginTop: 20 }}>
          <div className="teacher-feedback">
            <div className="label">Overall comment from your teacher</div>
            <div>{returned.overall}</div>
          </div>
        </div>
      )}

      {marking && fb && (
        <div className="marking-panel">
          <h3 style={{ marginTop: 0 }}>Marking summary</h3>
          <div className="mark-row" style={{ fontSize: 16 }}>
            <strong>Total: {feedbackTotal(fb)} / 50</strong>
            {!feedbackComplete(fb) && (
              <span style={{ color: 'var(--ink-soft)', fontSize: 14 }}>
                (some parts not yet marked)
              </span>
            )}
          </div>
          <label style={{ display: 'block', fontWeight: 600, fontSize: 14, margin: '12px 0 5px' }}>
            Overall comment
          </label>
          <textarea
            rows={3}
            style={{ width: '100%' }}
            placeholder="A short overall comment for the student (optional)"
            value={fb.overall}
            onChange={(e) => {
              const v = e.target.value;
              setFb((cur) => (cur ? { ...cur, overall: v } : cur));
              setDirty(true);
              setSaveMsg('');
            }}
          />
          {fb.returnedAt && (
            <p style={{ color: 'var(--ink-soft)', fontSize: 14 }}>
              Returned to {attempt.studentName} on {fmtDate(fb.returnedAt)}. Saving updates what
              they see.
            </p>
          )}
          <div className="actions">
            {fb.returnedAt ? (
              <button className="primary" disabled={saving || !dirty} onClick={() => void saveFeedback(false)}>
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            ) : (
              <>
                <button disabled={saving || !dirty} onClick={() => void saveFeedback(false)}>
                  {saving ? 'Saving…' : 'Save draft'}
                </button>
                <button className="primary" disabled={saving} onClick={() => void saveFeedback(true)}>
                  Return to student
                </button>
              </>
            )}
            {saveMsg && <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{saveMsg}</span>}
          </div>
        </div>
      )}
    </div>
  );
}
