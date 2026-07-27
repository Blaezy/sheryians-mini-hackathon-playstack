import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-indigo-400" : "text-white hover:text-indigo-400"
  }`;

const Navbar = ({ onAddClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-neutral-950 border-b border-neutral-800 relative z-50">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        <div className="text-white text-xl font-bold tracking-tight">
          <NavLink to="/" onClick={closeMenu}>
            Play<span className="text-indigo-400">Stack</span>
          </NavLink>
        </div>

      
        <div className="hidden md:flex gap-8">
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
          className="hidden md:block bg-indigo-400 text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-300 transition-colors cursor-pointer"
        >
          + Add Game
        </button>

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-neutral-950 border-t border-neutral-800">
          <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/want-to-play" className={navLinkClass} onClick={closeMenu}>
            Want to Play
          </NavLink>
          <NavLink to="/playing" className={navLinkClass} onClick={closeMenu}>
            Playing
          </NavLink>
          <NavLink to="/played" className={navLinkClass} onClick={closeMenu}>
            Played
          </NavLink>
          <button
            onClick={() => {
              onAddClick();
              closeMenu();
            }}
            className="bg-indigo-400 text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-300 transition-colors cursor-pointer w-full mt-2"
          >
            + Add Game
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;