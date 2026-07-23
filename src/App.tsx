import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { getStore } from './store';
import { Landing } from './pages/Landing';
import { StudentDashboard } from './pages/StudentDashboard';
import { ExamPage } from './pages/ExamPage';
import { AttemptViewPage } from './pages/AttemptViewPage';
import { TeacherPage } from './pages/TeacherPage';

export function App() {
  const store = getStore();
  return (
    <HashRouter>
      {store.mode === 'local' && (
        <div className="local-banner">
          Local mode — work is saved on this device only. Cloud sync &amp; live teacher view unlock
          once Firebase is configured (see SETUP.md).
        </div>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/exam/:id" element={<ExamPage />} />
        <Route path="/attempt/:id" element={<AttemptViewPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route
          path="*"
          element={
            <div className="page narrow">
              <p>Page not found.</p>
              <Link to="/">Back to start</Link>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
