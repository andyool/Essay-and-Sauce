import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EssayNotes, EssayRubric, MarkingKey, SAQuestionText, SourceCard } from '../components/ExamParts';
import { getEssay, getSourceSet } from '../data/bank';
import type { Attempt } from '../data/types';
import { fmtDate, timeAgo, wordCount } from '../lib/format';
import { getStore } from '../store';

function AnswerBlock({ text }: { text: string }) {
  return text.trim() ? (
    <div className="student-answer">{text}</div>
  ) : (
    <div className="student-answer empty-answer">No answer written.</div>
  );
}

export function AttemptViewPage() {
  const { id } = useParams<{ id: string }>();
  const store = getStore();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [missing, setMissing] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const isTeacher = store.isTeacherSignedIn();

  useEffect(() => {
    if (!id) return;
    const un = store.subscribeAttempt(id, (a) => {
      if (!a) {
        setMissing(true);
        return;
      }
      setAttempt(a);
    });
    store.getCurrentStudent().then((s) => setIsOwner(!!s));
    return un;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
            <MarkingKey q={q} />
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
        </div>
        <EssayRubric />
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
