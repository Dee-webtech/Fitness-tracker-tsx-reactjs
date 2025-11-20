import { useState } from "react";
import { Activity } from "lucide-react";
import type { Page } from "../App";
interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { name: string; id: Page }[] = [
  { name: "Home", id: "home" },
  { name: "Progress", id: "progress" },
  { name: "Settings", id: "settings" },
];


  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Logo */}
        <div
          className="logo"
          onClick={() => {
            setCurrentPage("home");
            setIsOpen(false);
          }}
          style={{ cursor: "pointer" }}
        >
          <Activity size={24} className="logo-icon" />
          <span className="logo-text">FitTrack</span>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span className="hamburger-icon">☰</span>
        </button>

        {/* Menu Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={currentPage === item.id ? "active" : ""}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
