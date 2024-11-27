import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gradient-to-b from-gray-500 to-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <a href="/">MyApp</a>
      </div>

      {/* Hamburger menu for mobile */}
      <button
        className="lg:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent lg:flex-row flex-col px-6 py-4 lg:py-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="dashboard"
            className="block text-gray-800 hover:text-gray-600 font-medium"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="tasklist"
            className="block text-gray-800 hover:text-gray-600 font-medium"
          >
            Task List
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
