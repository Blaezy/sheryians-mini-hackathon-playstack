import React from "react";
import { NavLink } from "react-router";

const Navbar = ({ onAddClick }) => {
  return (
    <nav className='flex items-center justify-between px-10 py-4 bg-neutral-950 border-b border-neutral-800'>
      <div className='text-white text-xl font-bold tracking-tight'>
        <NavLink to='/'>
          Play<span className='text-indigo-400'>Stack</span>
        </NavLink>
      </div>

      <div className='flex gap-8'>
        <NavLink to='/' className='text-white text-sm font-medium hover:text-indigo-400 transition-colors'>
          Home
        </NavLink>
        <NavLink to='/want-to-play' className='text-white text-sm font-medium hover:text-indigo-400 transition-colors'>
          Want to Play
        </NavLink>
        <NavLink to='/playing' className='text-white text-sm font-medium hover:text-indigo-400 transition-colors'>
          Playing
        </NavLink>
        <NavLink to='/played' className='text-white text-sm font-medium hover:text-indigo-400 transition-colors'>
          Played
        </NavLink>
      </div>

      <button
        onClick={onAddClick}
        className='bg-indigo-400 text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-300 transition-colors cursor-pointer'
      >
        + Add Game
      </button>
    </nav>
  );
};

export default Navbar;
