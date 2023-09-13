import React from 'react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 h-full bg-gray-800 w-16 flex flex-col justify-between p-4">
      {/* Logo */}
      <div className="mb-4">
        <img
          src="your-logo.png" // Replace with your logo image source
          alt="Logo"
          className="w-8 h-8"
        />
      </div>

      {/* Navigation Links */}
      <ul className="space-y-4 flex-1">
        <li>
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="text-white hover:text-gray-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Dark Mode Switch */}
      <button
        className="bg-gray-600 text-white p-2 rounded-md"
        onClick={() => {
          // Add your dark mode toggle logic here
        }}
      >
        Dark Mode
      </button>
    </nav>
  );
}
