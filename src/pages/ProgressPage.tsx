import React from 'react';
import { Activity, Droplet, Flame, Award, type LucideIcon } from 'lucide-react';
import AchievementBadge from '../components/AchievementBadge';

// Match App.tsx structure
interface Metrics {
  steps: number;
  calories: number;
  water: number;
}

interface ProgressPageProps {
  metrics: Metrics;
}

const ProgressPage: React.FC<ProgressPageProps> = ({ metrics }) => {
  return (
    <section className="progress-page">
      <h2>Your Progress</h2>
      <p className="subtitle">Track your journey over time</p>

      <div className="progress-cards">
        {/* Weekly Summary Section */}
        <div className="progress-summary">
          <h3>Weekly Summary</h3>

          <div className="summary-item">
            <Activity color="#10b981" size={20} />
            <span>Average Steps: {metrics.steps.toLocaleString()} /day</span>
          </div>

          <div className="summary-item">
            <Flame color="#f97316" size={20} />
            <span>Total Calories: {metrics.calories.toLocaleString()} kcal</span>
          </div>

          <div className="summary-item">
            <Droplet color="#06b6d4" size={20} />
            <span>Hydration: {metrics.water} L</span>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h3>Achievements</h3>
          <div className="achievements-grid">
            <AchievementBadge title="First Steps" icon={Activity as LucideIcon} unlocked={true} />
            <AchievementBadge title="Hydration Hero" icon={Droplet as LucideIcon} unlocked={true} />
            <AchievementBadge title="Calorie Crusher" icon={Flame as LucideIcon} unlocked={false} />
            <AchievementBadge title="Week Warrior" icon={Award as LucideIcon} unlocked={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressPage;
