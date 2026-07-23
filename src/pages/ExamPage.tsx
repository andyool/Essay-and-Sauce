import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EssayRubric, SAQuestionText, SourceCard } from '../components/ExamParts';
import { getEssay, getSourceSet } from '../data/bank';
import type { Answers, Attempt } from '../data/types';
import { wordCount } from '../lib/format';
import { getStore } from '../store';

type SaveState = 'saved' | 'pending' | 'saving';

const IDLE_SAVE_MS = 2500; // save this long after the last keystroke
const MAX_SAVE_GAP_MS = 15000; // …but at least this often while typing

export function ExamPage() {
  const { id } = useParams<{ id: string }>();
  const store = getStore();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [missing, setMissing] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>('saved');
  const pendingRef = useRef<Partial<Attempt>>({});
  const timerRef = useRef<number | null>(null);
  const lastSaveRef = useRef(Date.now());

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
      setAttempt(a);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
    } catch {
      pendingRef.current = { ...patch, ...pendingRef.current };
      setSaveState('pending');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const queue = useCallback(
    (patch: Partial<Attempt>) => {
      setAttempt((a) => (a ? { ...a, ...patch } : a));
      pendingRef.current = { ...pendingRef.current, ...patch };
      setSaveState('pending');
      if (timerRef.current) window.clearTimeout(timerRef.current);
      const overdue = Date.now() - lastSaveRef.current > MAX_SAVE_GAP_MS;
      timerRef.current = window.setTimeout(() => void flush(), overdue ? 0 : IDLE_SAVE_MS);
    },
    [flush],
  );

  // Flush when the tab is hidden or the component unmounts.
  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === 'hidden') void flush();
    };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onHide);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onHide);
      void flush();
    };
  }, [flush]);

  if (missing) {
    return (
      <div className="page narrow">
        <p>This exam could not be found.</p>
        <button onClick={() => navigate('/dashboard')}>Back to dashboard</button>
      </div>
    );
  }
  if (!attempt) return <div className="page narrow">Loading your exam…</div>;

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

  const setAnswer = (letter: keyof Answers, value: string) => {
    queue({ answers: { ...attempt.answers, [letter]: value } });
  };

  const setPage = (page: 1 | 2) => {
    queue({ page });
    void flush();
    window.scrollTo({ top: 0 });
  };

  async function saveAndExit() {
    await flush();
    navigate('/dashboard');
  }

  async function submit() {
    const essayWords = wordCount(attempt!.essayText);
    const saWords =
      wordCount(attempt!.answers.a) + wordCount(attempt!.answers.b) + wordCount(attempt!.answers.c);
    const warnings: string[] = [];
    if (attempt!.essayChoice === null) warnings.push('you have not chosen an essay question');
    if (saWords === 0) warnings.push('your source analysis answers are empty');
    if (essayWords === 0) warnings.push('your essay is empty');
    const msg =
      warnings.length > 0
        ? 'Submit this exam? Note: ' + warnings.join('; ') + '. You cannot edit after submitting.'
        : 'Submit this exam? You cannot edit after submitting.';
    if (!window.confirm(msg)) return;
    queue({ status: 'submitted', submittedAt: Date.now() });
    await flush();
    navigate('/attempt/' + attempt!.id);
  }

  const saveLabel = saveState === 'saved' ? 'Saved ✓' : saveState === 'saving' ? 'Saving…' : 'Typing…';

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
          <span className={'save-state' + (saveState !== 'saved' ? ' saving' : '')}>{saveLabel}</span>
          <button onClick={saveAndExit}>Save &amp; exit</button>
        </div>
      </div>

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

        {attempt.page === 1 ? (
          <div className="paper-body">
            <p className="section-note">
              Examine Sources 1, 2 and 3 and answer all three questions. Type each answer in the
              space beneath its question. Sources are constructed for skills practice in the style
              of the period.
            </p>
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
                    {q.marks} mark{q.marks === 1 ? '' : 's'}
                  </span>
                  <span>{wordCount(attempt.answers[q.letter])} words</span>
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
                <span>Aim for a sustained, structured argument</span>
                <span>{wordCount(attempt.essayText)} words</span>
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
    </div>
  );
}
