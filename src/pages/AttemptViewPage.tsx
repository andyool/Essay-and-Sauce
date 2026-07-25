import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components/Feedback';
import {
  AwardedBreakdown,
  EssayNotes,
  EssayRubric,
  MarkersNotesKey,
  MarkingKey,
  MarkingKeyPicker,
  SAQuestionText,
  SourceCard,
} from '../components/ExamParts';
import { getEssay, getSourceSet } from '../data/bank';
import { getUnit } from '../data/units';
import type {
  Attempt,
  AttemptSection,
  EssaySection,
  FeedbackPart,
  KeySection,
  SourceSection,
  TeacherFeedback,
} from '../data/types';
import { fmtDate, timeAgo, wordCount } from '../lib/format';
import {
  ESSAY_SECTIONS,
  isChecklist,
  keySectionsFor,
  picksTotal,
  rowCount,
  sectionStarts,
} from '../lib/marking';
import {
  emptyFeedback,
  feedbackComplete,
  feedbackTotal,
  paperMarks,
  partKey,
  sectionTitle,
  sectionWord,
  type PartLetter,
} from '../lib/paper';
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

function AnswerBlock({ text }: { text: string }) {
  return text.trim() ? (
    <div className="student-answer">{text}</div>
  ) : (
    <div className="student-answer empty-answer">No answer written.</div>
  );
}

/** Read-only feedback box shown to the student once feedback is returned:
 *  the mark, how it was made up section by section, and the comment. */
function FeedbackBox({
  fb,
  part,
  max,
  sections,
}: {
  fb: TeacherFeedback;
  part: FeedbackPart;
  max: number;
  sections: KeySection[];
}) {
  const mark = fb.marks[part] ?? null;
  const comment = (fb.comments[part] ?? '').trim();
  const picks = fb.picks?.[part] ?? [];
  const marked = picks.some((p) => p !== null && p !== undefined);
  if (mark === null && !comment) return null;
  return (
    <div className="teacher-feedback">
      <div className="label">
        Teacher’s feedback{mark !== null ? ` — ${mark} / ${max} marks` : ''}
      </div>
      {marked && <AwardedBreakdown sections={sections} picks={picks} />}
      {comment && <div className="comment">{comment}</div>}
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
    if (attempt && !dirty) setFb(attempt.feedback ?? emptyFeedback(attempt.sections));
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
  if (!attempt) return <Loading text="Loading this attempt…" />;

  const sections = attempt.sections;
  const bankOk = sections.every((s) =>
    s.kind === 'source'
      ? !!getSourceSet(s.sourceSetId)
      : s.essayIds.every((eid) => !!getEssay(eid)),
  );
  if (sections.length === 0 || !bankOk) {
    return <div className="page narrow">This attempt references questions no longer in the bank.</div>;
  }

  const live = attempt.status === 'in-progress';
  const backTo = isTeacher ? '/teacher' : '/dashboard';
  const totalMax = paperMarks(sections);

  const marking = isTeacher && attempt.status === 'submitted' && fb !== null;
  // What the student sees: only feedback the teacher has returned.
  const returned = !isTeacher && attempt.feedback?.returnedAt ? attempt.feedback : null;

  const maxFor = (section: AttemptSection, letter: PartLetter): number => {
    if (letter === 'essay') return 30;
    const set = getSourceSet((section as SourceSection).sourceSetId)!;
    return set.questions.find((q) => q.letter === letter)!.marks;
  };

  const picksFor = (part: FeedbackPart): (number | null)[] => fb?.picks?.[part] ?? [];

  /** Change what has been picked for one part of the paper, and set the mark
   *  to what the picks now add up to (nothing picked means unmarked). The
   *  change is made inside the state update so that presses in quick
   *  succession all count. */
  function editPicks(
    section: AttemptSection,
    sectionIndex: number,
    letter: PartLetter,
    change: (picks: (number | null)[]) => void,
  ) {
    const part = partKey(sectionIndex, letter);
    setFb((cur) => {
      if (!cur) return cur;
      const keySections = keySectionsFor(section, letter);
      const picks = (cur.picks?.[part] ?? []).slice();
      while (picks.length < rowCount(keySections)) picks.push(null);
      change(picks);
      const anything = picks.some((p) => p !== null && p !== undefined);
      return {
        ...cur,
        picks: { ...(cur.picks ?? {}), [part]: picks },
        marks: {
          ...cur.marks,
          [part]: anything ? Math.min(maxFor(section, letter), picksTotal(picks)) : null,
        },
      };
    });
    setDirty(true);
    setSaveMsg('');
  }

  /** Press a mark button in the key: award those marks, or take them back if
   *  that button was already on. In a ladder section the award moves, since
   *  only one description there can be met. */
  function pickRow(
    section: AttemptSection,
    sectionIndex: number,
    letter: PartLetter,
    keyIndex: number,
    row: number,
    marks: number,
  ) {
    const keySections = keySectionsFor(section, letter);
    const start = sectionStarts(keySections)[keyIndex];
    const rows = keySections[keyIndex].rows.length;
    const ladder = !isChecklist(keySections[keyIndex]);
    editPicks(section, sectionIndex, letter, (picks) => {
      const already = picks[start + row] === marks;
      if (ladder) for (let i = 0; i < rows; i++) picks[start + i] = null;
      picks[start + row] = already ? null : marks;
    });
  }

  function clearKeySection(
    section: AttemptSection,
    sectionIndex: number,
    letter: PartLetter,
    keyIndex: number,
  ) {
    const keySections = keySectionsFor(section, letter);
    const start = sectionStarts(keySections)[keyIndex];
    const rows = keySections[keyIndex].rows.length;
    editPicks(section, sectionIndex, letter, (picks) => {
      for (let i = 0; i < rows; i++) picks[start + i] = null;
    });
  }

  /** Wipe a part's picks: either back to unmarked, or a deliberate zero. */
  function resetPart(sectionIndex: number, letter: PartLetter, zero: boolean) {
    const part = partKey(sectionIndex, letter);
    setFb((cur) =>
      cur
        ? {
            ...cur,
            picks: { ...(cur.picks ?? {}), [part]: [] },
            marks: { ...cur.marks, [part]: zero ? 0 : null },
          }
        : cur,
    );
    setDirty(true);
    setSaveMsg('');
  }

  function setComment(sectionIndex: number, letter: PartLetter, text: string) {
    const part = partKey(sectionIndex, letter);
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
  function markEditor(section: AttemptSection, sectionIndex: number, letter: PartLetter) {
    if (!marking || !fb) return null;
    const part = partKey(sectionIndex, letter);
    const max = maxFor(section, letter);
    const mark = fb.marks[part] ?? null;
    const keySections = keySectionsFor(section, letter);
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
            <button type="button" onClick={() => resetPart(sectionIndex, letter, true)}>
              No marks
            </button>
          )}
          {mark !== null && (
            <button type="button" onClick={() => resetPart(sectionIndex, letter, false)}>
              Start again
            </button>
          )}
        </div>
        <MarkingKeyPicker
          sections={keySections}
          picks={picksFor(part)}
          onPick={(si, ri, m) => pickRow(section, sectionIndex, letter, si, ri, m)}
          onClearSection={(si) => clearKeySection(section, sectionIndex, letter, si)}
        />
        <textarea
          rows={2}
          placeholder="Comment for the student (optional)"
          value={fb.comments[part] ?? ''}
          onChange={(e) => setComment(sectionIndex, letter, e.target.value)}
        />
      </div>
    );
  }

  function renderSourceSection(section: SourceSection, i: number) {
    const sourceSet = getSourceSet(section.sourceSetId)!;
    return (
      <div key={i}>
        <div className="paper-head" style={i > 0 ? { marginTop: 30 } : undefined}>
          <div className="exam-title">
            Section {sectionWord(i)} — Source Analysis: {getUnit(section.unit).name}
          </div>
          <div className="exam-sub">{sourceSet.title} — 20 marks</div>
        </div>
        <div className="paper-body">
          {sourceSet.sources.map((s) => (
            <SourceCard key={s.n} source={s} />
          ))}
          {sourceSet.questions.map((q) => {
            const part = partKey(i, q.letter);
            return (
              <div className="question-block" key={q.letter}>
                <SAQuestionText q={q} />
                <div className="answer-label">
                  {attempt!.studentName}’s answer · {wordCount(section.answers[q.letter])} words
                </div>
                <AnswerBlock text={section.answers[q.letter]} />
                {returned && (
                  <FeedbackBox fb={returned} part={part} max={q.marks} sections={q.key} />
                )}
                {markEditor(section, i, q.letter)}
                {marking ? (
                  <MarkersNotesKey
                    label={'Markers’ notes — question (' + q.letter + ')'}
                    notes={q.notes}
                  />
                ) : (
                  <MarkingKey q={q} picks={returned?.picks?.[part]} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderEssaySection(section: EssaySection, i: number) {
    const essays = section.essayIds.map((eid) => getEssay(eid)!);
    const chosenEssay = section.essayChoice !== null ? essays[section.essayChoice] : null;
    const part = partKey(i, 'essay');
    return (
      <div key={i}>
        <div className="paper-head" style={i > 0 ? { marginTop: 30 } : undefined}>
          <div className="exam-title">
            Section {sectionWord(i)} — Essay: {getUnit(section.unit).name}
          </div>
          <div className="exam-sub">One question chosen from three — 30 marks</div>
        </div>
        <div className="paper-body">
          {essays.map((e, ei) => (
            <div
              className={'essay-choice' + (section.essayChoice === ei ? ' selected' : '')}
              key={e.id}
              style={{ cursor: 'default' }}
            >
              <span>
                <strong>Question {ei + 1}.</strong> {e.text} <span className="marks">(30 marks)</span>
                {section.essayChoice === ei && (
                  <span className="frame-tag">✔ chosen by {attempt!.studentName}</span>
                )}
              </span>
            </div>
          ))}
          <div className="question-block">
            <div className="answer-label">
              {attempt!.studentName}’s essay · {wordCount(section.essayText)} words
            </div>
            <AnswerBlock text={section.essayText} />
            {returned && (
              <FeedbackBox fb={returned} part={part} max={30} sections={ESSAY_SECTIONS} />
            )}
            {markEditor(section, i, 'essay')}
          </div>
          {!marking && <EssayRubric picks={returned?.picks?.[part]} />}
          {chosenEssay && (
            <details className="key">
              <summary>Markers’ notes for the chosen question</summary>
              <div className="key-inner">
                <EssayNotes notes={chosenEssay.notes} />
              </div>
            </details>
          )}
        </div>
      </div>
    );
  }

  const currentSection = sections[Math.min(Math.max(attempt.page, 1), sections.length) - 1];

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
          {!live && (
            <button
              onClick={() => window.print()}
              title="Print this attempt, or choose “Save as PDF” in the print dialog"
            >
              🖨 Print / PDF
            </button>
          )}
          <Link to={backTo}>← Back</Link>
        </div>
      </div>

      {live && (
        <div className="watch-banner">
          <span className="badge live">Live</span>
          <span>
            In progress — updating as {attempt.studentName} types. Last activity{' '}
            {timeAgo(attempt.updatedAt)} · currently on{' '}
            {sectionTitle(currentSection, attempt.page - 1)}.
          </span>
        </div>
      )}

      <TimingSummary attempt={attempt} />

      {returned && (
        <div className="feedback-banner">
          <div className="total">
            {feedbackComplete(returned, sections)
              ? 'Marked: ' + feedbackTotal(returned) + ' / ' + totalMax
              : 'Your teacher has marked part of this exam (' + feedbackTotal(returned) + ' marks so far).'}
          </div>
          <div>
            Feedback returned {fmtDate(returned.returnedAt!)} — look for the “Teacher’s feedback”
            boxes under each of your answers.
          </div>
        </div>
      )}

      {sections.map((s, i) =>
        s.kind === 'source' ? renderSourceSection(s, i) : renderEssaySection(s, i),
      )}

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
            <strong>Total: {feedbackTotal(fb)} / {totalMax}</strong>
            {!feedbackComplete(fb, sections) && (
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
