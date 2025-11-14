import { useState } from "react";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
    console.log('Viewport width:', window.innerWidth); // <-- ADD THIS LINE HERE

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Progress", id: "progress" },
    { name: "Settings", id: "settings" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md relative z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-600">FitTrack</h1>

      {/* Hamburger Icon (mobile) */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-6 font-medium ${
          isOpen ? "block" : "hidden"
        } absolute md:static bg-white w-full left-0 top-14 md:w-auto text-center md:text-left shadow-md md:shadow-none transition-all duration-300`}
      >
        {navItems.map((item) => (
          <li key={item.id} className="p-2 md:p-0">
            <button
              onClick={() => {
                setCurrentPage(item.id as Page);
                setIsOpen(false);
              }}
              className={`block w-full text-gray-700 hover:text-green-600 transition ${
                currentPage === item.id ? "text-green-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
