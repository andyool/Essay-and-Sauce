import type { KeySection, SAQuestion, SourceDoc } from '../data/types';
import { ESSAY_RUBRIC, ESSAY_TOTAL } from '../data/rubric';

export function SourceCard({ source }: { source: SourceDoc }) {
  return (
    <div className={'source-card' + (source.kind === 'visual' ? ' visual' : '')}>
      <div className="attribution">{source.attribution}</div>
      {source.kind === 'visual' && <div className="visual-label">Description of a visual source</div>}
      <div className="body">{source.body}</div>
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

export function KeySections({ sections }: { sections: KeySection[] }) {
  return (
    <>
      {sections.map((sec, i) => (
        <div key={i}>
          {sec.heading && <div className="key-heading">{sec.heading}</div>}
          <table className="key-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {sec.rows.map((row, j) => (
                <tr key={j}>
                  <td>{row.descriptor}</td>
                  <td className="marks">{row.marks}</td>
                </tr>
              ))}
              {sec.subtotal !== undefined && (
                <tr>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>Subtotal</td>
                  <td className="marks" style={{ fontWeight: 700 }}>
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

export function MarkingKey({ q }: { q: SAQuestion }) {
  return (
    <details className="key">
      <summary>Marking key &amp; markers’ notes — question ({q.letter})</summary>
      <div className="key-inner">
        <KeySections sections={q.key} />
        <div className="markers-notes">
          <div className="label">Markers’ notes</div>
          {q.notes}
        </div>
      </div>
    </details>
  );
}

export function EssayRubric() {
  return (
    <details className="key">
      <summary>The fixed 30-mark essay marking rubric</summary>
      <div className="key-inner">
        {ESSAY_RUBRIC.map((c) => (
          <div key={c.name}>
            <div className="key-heading">
              {c.name} ({c.max} marks)
            </div>
            <table className="key-table">
              <tbody>
                {c.levels.map((l, i) => (
                  <tr key={i}>
                    <td>{l.descriptor}</td>
                    <td className="marks">{l.marks}</td>
                  </tr>
                ))}
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
