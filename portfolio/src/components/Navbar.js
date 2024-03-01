import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-purple-500 font-bold text-xl">
          <Link to="/">Portfolio</Link>
        </div>
        <label htmlFor="check" className="cursor-pointer lg:hidden">
          <i className="ri-menu-line text-2xl"></i>
        </label>
        <input type="checkbox" name="check" id="check" className="hidden" />
        <ul className="hidden lg:flex gap-4">
          <li><Link to="/" className="hover:border-purple-500">Home</Link></li>
          <li><Link to="/about" className="hover:border-purple-500">About</Link></li>
          <li><Link to="/resume" className="hover:border-purple-500">Resume</Link></li>
          <li><Link to="/portfolio" className="hover:border-purple-500">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:border-purple-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
