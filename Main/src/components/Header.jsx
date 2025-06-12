import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-4 justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition ${
              isActive
                ? 'bg-yellow-500 text-black font-semibold'
                : 'hover:bg-yellow-400 hover:text-black'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition ${
              isActive
                ? 'bg-yellow-500 text-black font-semibold'
                : 'hover:bg-yellow-400 hover:text-black'
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition ${
              isActive
                ? 'bg-yellow-500 text-black font-semibold'
                : 'hover:bg-yellow-400 hover:text-black'
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/git"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition ${
              isActive
                ? 'bg-yellow-500 text-black font-semibold'
                : 'hover:bg-yellow-400 hover:text-black'
            }`
          }
        >
          Git
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
