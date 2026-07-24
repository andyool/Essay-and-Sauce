import { useState } from 'react';

/** In-app replacement for window.confirm: a modal with a clear question,
 *  a cancel button, and a styled action button. */
export function ConfirmDialog({
  title,
  body,
  actionLabel,
  danger = false,
  onCancel,
  onConfirm,
}: {
  title: string;
  body: string;
  actionLabel: string;
  danger?: boolean;
  onCancel: () => void;
  onConfirm: () => void | Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  async function go() {
    setBusy(true);
    setErr('');
    try {
      await onConfirm();
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Something went wrong.');
      setBusy(false);
    }
  }

  return (
    <div className="modal-scrim" onClick={busy ? undefined : onCancel} role="presentation">
      <div className="modal confirm" onClick={(e) => e.stopPropagation()} role="alertdialog" aria-modal="true" aria-label={title}>
        <h3>{title}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: 14.5 }}>{body}</p>
        {err && <div className="form-error">{err}</div>}
        <div className="actions">
          <button onClick={onCancel} disabled={busy} autoFocus>
            Cancel
          </button>
          <button className={danger ? 'danger-ghost' : 'primary'} onClick={() => void go()} disabled={busy}>
            {busy ? 'Working…' : actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

/** A friendlier loading state than bare text. */
export function Loading({ text = 'Loading…' }: { text?: string }) {
  return (
    <div className="page narrow">
      <div className="loading" role="status" aria-live="polite">
        <span className="spinner" aria-hidden="true" />
        {text}
      </div>
    </div>
  );
}
