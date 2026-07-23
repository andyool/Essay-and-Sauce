import type { KeySection, SAQuestion, SourceDoc } from '../data/types';
import { ESSAY_RUBRIC, ESSAY_TOTAL } from '../data/rubric';
import {
  ESSAY_SECTIONS,
  isChecklist,
  rowMarks,
  sectionMax,
  sectionScore,
  sectionStarts,
} from '../lib/marking';

export function SourceCard({ source }: { source: SourceDoc }) {
  return (
    <div className={'source-card' + (source.kind === 'visual' ? ' visual' : '')}>
      <div className="attribution">{source.attribution}</div>
      {source.image && (
        <figure className="source-figure">
          <img src={import.meta.env.BASE_URL + source.image.src} alt={source.image.alt} loading="lazy" />
          <figcaption>{source.image.credit}</figcaption>
        </figure>
      )}
      {source.kind === 'visual' && !source.image && (
        <div className="visual-label">Description of a visual source</div>
      )}
      <div className={'body' + (source.image ? ' caption-style' : '')}>{source.body}</div>
      {source.note && <div className="note">{source.note}</div>}
      {source.footnotes && source.footnotes.length > 0 && (
        <div className="footnotes">
          {source.footnotes.map((f, i) => (
            <div key={i}>
              {i + 1}. {f}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SAQuestionText({ q }: { q: SAQuestion }) {
  return (
    <div className="question-text">
      <span className="qletter">({q.letter})</span>
      <span>
        {q.text} <span className="marks">({q.marks} marks)</span>
      </span>
    </div>
  );
}

/** The marks awarded on a row, when the student is looking at a key their
 *  teacher has marked against. */
function AwardedChip({ marks }: { marks: number }) {
  return <span className="awarded-chip">✔ {marks}</span>;
}

export function KeySections({
  sections,
  picks,
}: {
  sections: KeySection[];
  /** The teacher's awards, numbered straight through the sections. Rows that
   *  earned marks are highlighted. */
  picks?: (number | null)[];
}) {
  const starts = sectionStarts(sections);
  return (
    <>
      {sections.map((sec, i) => (
        <div key={i}>
          {/* Unheaded sections are labelled when marks are shown, so the
              student can match each table to their breakdown above. */}
          {(sec.heading || (picks && sections.length > 1)) && (
            <div className="key-heading">{sec.heading ?? 'Part ' + (i + 1)}</div>
          )}
          <table className="key-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {sec.rows.map((row, j) => {
                const awarded = picks?.[starts[i] + j] ?? null;
                return (
                  <tr key={j} className={awarded !== null ? 'awarded' : ''}>
                    <td>{row.descriptor}</td>
                    <td className="marks">
                      {row.marks}
                      {awarded !== null && <AwardedChip marks={awarded} />}
                    </td>
                  </tr>
                );
              })}
              {sec.subtotal !== undefined && (
                <tr>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>
                    {picks ? 'You were given' : 'Subtotal'}
                  </td>
                  <td className="marks" style={{ fontWeight: 700 }}>
                    {picks ? sectionScore(sections, picks, i).got + ' / ' : ''}
                    {sec.subtotal}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}

export function MarkingKey({ q, picks }: { q: SAQuestion; picks?: (number | null)[] }) {
  return (
    <details className="key">
      <summary>
        {picks
          ? 'Marking key — where your marks came from, question (' + q.letter + ')'
          : 'Marking key & markers’ notes — question (' + q.letter + ')'}
      </summary>
      <div className="key-inner">
        <KeySections sections={q.key} picks={picks} />
        <div className="markers-notes">
          <div className="label">Markers’ notes</div>
          {q.notes}
        </div>
      </div>
    </details>
  );
}

/** What the teacher awarded, section by section: the student's breakdown of a
 *  question's mark, in the words of the marking key. */
export function AwardedBreakdown({
  sections,
  picks,
}: {
  sections: KeySection[];
  picks: (number | null)[];
}) {
  const starts = sectionStarts(sections);
  return (
    <ul className="awarded-list">
      {sections.map((sec, i) => {
        const { got, picked } = sectionScore(sections, picks, i);
        const label = sec.heading ?? (sections.length > 1 ? 'Part ' + (i + 1) : 'Marking key');
        const rows = sec.rows.filter((_r, j) => (picks[starts[i] + j] ?? null) !== null);
        return (
          <li key={i}>
            <div className="head">
              <span className="part">{label}</span>
              <span className={'got' + (picked ? '' : ' none')}>
                {got} / {sectionMax(sec)}
              </span>
            </div>
            {picked ? (
              rows.map((r, j) => <div className="why" key={j}>{r.descriptor}</div>)
            ) : (
              <div className="why none">No marks awarded for this part.</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** The marking key with its mark numbers turned into buttons. Pressing one
 *  awards those marks; pressing it again takes them back. Within a ladder
 *  section only one descriptor can hold marks, so pressing a different band
 *  moves the award there. */
export function MarkingKeyPicker({
  sections,
  picks,
  onPick,
  onClearSection,
}: {
  sections: KeySection[];
  /** Marks awarded per row, numbered straight through the sections. */
  picks: (number | null)[];
  onPick: (section: number, row: number, marks: number) => void;
  onClearSection: (section: number) => void;
}) {
  const starts = sectionStarts(sections);
  return (
    <div className="key-picker">
      {sections.map((sec, si) => {
        const { got, picked } = sectionScore(sections, picks, si);
        const max = sectionMax(sec);
        const checklist = isChecklist(sec);
        return (
          <div className="pick-section" key={si}>
            <div className="pick-head">
              <span className="key-heading">
                {sec.heading ?? (sections.length > 1 ? 'Part ' + (si + 1) + ' of the key' : 'Marking key')}
              </span>
              <span className="how">
                {checklist ? 'award each point earned' : 'choose the one description that fits'}
              </span>
            </div>
            <table className="key-table pickable">
              <tbody>
                {sec.rows.map((row, ri) => {
                  const awarded = picks[starts[si] + ri] ?? null;
                  const options = rowMarks(row.marks);
                  const single = options.length === 1;
                  return (
                    <tr
                      key={ri}
                      className={awarded !== null ? 'picked' : ''}
                      onClick={single ? () => onPick(si, ri, options[0]) : undefined}
                      style={single ? { cursor: 'pointer' } : undefined}
                    >
                      <td>{row.descriptor}</td>
                      <td className="marks">
                        {options.map((m) => (
                          <button
                            type="button"
                            key={m}
                            className={'mark-pill' + (awarded === m ? ' on' : '')}
                            aria-pressed={awarded === m}
                            title={
                              awarded === m ? 'Take back these marks' : 'Award ' + m + ' marks'
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              onPick(si, ri, m);
                            }}
                          >
                            {m}
                          </button>
                        ))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pick-foot">
              {picked ? (
                <>
                  <span>
                    <strong>
                      {got} / {max}
                    </strong>{' '}
                    awarded
                  </span>
                  <button type="button" className="link-btn" onClick={() => onClearSection(si)}>
                    clear
                  </button>
                </>
              ) : (
                <span className="unmarked">not yet marked — {max} available</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function EssayRubric({ picks }: { picks?: (number | null)[] }) {
  const starts = sectionStarts(ESSAY_SECTIONS);
  return (
    <details className="key">
      <summary>
        {picks
          ? 'Essay rubric — where your marks came from'
          : 'The fixed 30-mark essay marking rubric'}
      </summary>
      <div className="key-inner">
        {ESSAY_RUBRIC.map((c, ci) => (
          <div key={c.name}>
            <div className="key-heading">
              {c.name} ({c.max} marks)
              {picks && (
                <span className="you-got">
                  {' '}
                  — you were given {sectionScore(ESSAY_SECTIONS, picks, ci).got} of {c.max}
                </span>
              )}
            </div>
            <table className="key-table">
              <tbody>
                {c.levels.map((l, i) => {
                  const awarded = picks?.[starts[ci] + i] ?? null;
                  return (
                    <tr key={i} className={awarded !== null ? 'awarded' : ''}>
                      <td>{l.descriptor}</td>
                      <td className="marks">
                        {l.marks}
                        {awarded !== null && <AwardedChip marks={awarded} />}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
        <p style={{ fontWeight: 700 }}>Total: {ESSAY_TOTAL} marks</p>
      </div>
    </details>
  );
}

export function EssayNotes({ notes }: { notes: string }) {
  return (
    <div className="markers-notes">
      <div className="label">Markers’ notes</div>
      {notes}
    </div>
  );
}

/** The markers' notes on their own, for marking — where the key table itself
 *  has been replaced by the clickable one. */
export function MarkersNotesKey({ label, notes }: { label: string; notes: string }) {
  return (
    <details className="key">
      <summary>{label}</summary>
      <div className="key-inner">
        <EssayNotes notes={notes} />
      </div>
    </details>
  );
}
