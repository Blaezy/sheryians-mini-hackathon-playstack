import React from "react";
import { NavLink } from "react-router";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-indigo-400" : "text-white hover:text-indigo-400"
  }`;

const Navbar = ({ onAddClick }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-neutral-950 border-b border-neutral-800">
      <div className="text-white text-xl font-bold tracking-tight">
        <NavLink to="/">
          Play<span className="text-indigo-400">Stack</span>
        </NavLink>
      </div>

      <div className="flex gap-8">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/want-to-play" className={navLinkClass}>
          Want to Play
        </NavLink>
        <NavLink to="/playing" className={navLinkClass}>
          Playing
        </NavLink>
        <NavLink to="/played" className={navLinkClass}>
          Played
        </NavLink>
      </div>

      <button
        onClick={onAddClick}
        className="bg-indigo-400 text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-300 transition-colors cursor-pointer"
      >
        + Add Game
      </button>
    </nav>
  );
};

export default Navbar;