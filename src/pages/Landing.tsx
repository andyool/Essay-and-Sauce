import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getStore } from '../store';

export function Landing() {
  const store = getStore();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
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
    setBusy(true);
    try {
      await store.joinClass(name, code);
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
        {error && <div className="form-error">{error}</div>}
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
