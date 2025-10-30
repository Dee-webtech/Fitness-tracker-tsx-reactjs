import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProgressPage from './pages/ProgressPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

// Define types for your metrics and goals
interface Metrics {
  steps: number;
  calories: number;
  water: number;
}

interface Goals {
  steps: number;
  calories: number;
  water: number;
}

export type Page = 'home' | 'progress' | 'settings';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<Theme>('light');
  const [metrics, setMetrics] = useState<Metrics>({
    steps: 5240,
    calories: 1350,
    water: 1.2,
  });
  const [goals, setGoals] = useState<Goals>({
    steps: 10000,
    calories: 2000,
    water: 2.5,
  });

  const updateMetric = (metric: keyof Metrics, value: number) => {
    setMetrics((prev) => ({ ...prev, [metric]: value }));
  };

  const updateGoal = (goal: keyof Goals, value: number) => {
    setGoals((prev) => ({ ...prev, [goal]: value }));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="content">
        {currentPage === 'home' && (
          <Home metrics={metrics} updateMetric={updateMetric} goals={goals} />
        )}
        {currentPage === 'progress' && <ProgressPage metrics={metrics} />}
        {currentPage === 'settings' && (
          <SettingsPage
            goals={goals}
            updateGoal={updateGoal}
            theme={theme}
            setTheme={setTheme}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
