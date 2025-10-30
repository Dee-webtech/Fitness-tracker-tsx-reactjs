import React from 'react';
import { Activity } from 'lucide-react';

type Page = 'home' | 'progress' | 'settings';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Activity size={28} />
        FitTrack
      </h1>
      <ul className="nav-links">
        <li
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </li>
        <li
          className={currentPage === 'progress' ? 'active' : ''}
          onClick={() => setCurrentPage('progress')}
        >
          Progress
        </li>
        <li
          className={currentPage === 'settings' ? 'active' : ''}
          onClick={() => setCurrentPage('settings')}
        >
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
