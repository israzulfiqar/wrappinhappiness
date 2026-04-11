import { Routes, Route } from 'react-router-dom';
import styles from './theme';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  return (
    <div style={styles.page}>
      <Nav />
      <Routes>
        <Route path="/"      element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}