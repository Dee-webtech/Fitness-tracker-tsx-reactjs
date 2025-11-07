import React, { useState } from 'react';
import { Activity } from 'lucide-react';

type Page = 'home' | 'progress' | 'settings';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        <Activity size={28} />
        FitTrack
      </h1>

      {/* Hamburger button */}
      <button 
        className="hamburger" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => handleNavClick('home')}
        >
          Home
        </li>
        <li
          className={currentPage === 'progress' ? 'active' : ''}
          onClick={() => handleNavClick('progress')}
        >
          Progress
        </li>
        <li
          className={currentPage === 'settings' ? 'active' : ''}
          onClick={() => handleNavClick('settings')}
        >
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;