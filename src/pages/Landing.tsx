import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isValidPin } from '../lib/format';
import { getStore } from '../store';

export function Landing() {
  const store = getStore();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    store.getCurrentStudent().then((s) => {
      if (s) navigate('/dashboard', { replace: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function join(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Enter your name.');
      return;
    }
    if (!code.trim()) {
      setError('Enter your class code.');
      return;
    }
    if (!isValidPin(pin)) {
      setError('Enter a 4-digit PIN (numbers only).');
      return;
    }
    setBusy(true);
    try {
      await store.joinClass(name, code, pin);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not join. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="page narrow">
      <div className="hero">
        <div className="brand">Essay &amp; Sauce</div>
        <div className="tag">ATAR Modern History practice — Nazism in Germany</div>
      </div>
      <form className="join-card" onSubmit={join}>
        <h3>Student sign-in</h3>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Alex Nguyen"
          autoComplete="name"
        />
        <label htmlFor="code">Class code</label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder={store.mode === 'local' ? 'any code works in local mode' : 'from your teacher, e.g. K7Q2M'}
          autoCapitalize="characters"
        />
        <label htmlFor="pin">Your 4-digit PIN</label>
        <input
          id="pin"
          type="password"
          inputMode="numeric"
          pattern="\d{4}"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
          placeholder="••••"
          autoComplete="off"
          aria-describedby="pin-help"
        />
        <div id="pin-help" className="field-help">
          First time here? Choose any 4 digits — that PIN protects your work from then on.
          Coming back? Enter the PIN you chose. Forgotten it? Your teacher can reset it.
        </div>
        {error && <div className="form-error" role="alert">{error}</div>}
        <div className="actions">
          <button className="primary big" type="submit" disabled={busy}>
            {busy ? 'Joining…' : 'Enter'}
          </button>
        </div>
      </form>
      <div className="teacher-link">
        Teaching this class? <Link to="/teacher">Teacher dashboard</Link>
      </div>
    </div>
  );
}
