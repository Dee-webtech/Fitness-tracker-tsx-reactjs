import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-600">FitTrack</h1>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menu Links */}
      <ul
        className={`md:flex md:space-x-6 font-medium ${
          isOpen ? "block" : "hidden"
        } absolute md:static bg-white w-full left-0 top-14 md:w-auto text-center md:text-left shadow-md md:shadow-none transition-all duration-300`}
      >
        <li className="p-2 md:p-0 hover:text-green-600">
          <a href="#">Home</a>
        </li>
        <li className="p-2 md:p-0 hover:text-green-600">
          <a href="#">Progress</a>
        </li>
        <li className="p-2 md:p-0 hover:text-green-600">
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
