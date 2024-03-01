import React from 'react';
import { Link } from 'react-router-dom';
import resume_pdf from '../assets/cv.pdf'
const Navbar = () => {
  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-purple-500 font-bold text-xl">
          <Link to="/"><span className='text-purple-500'>Full</span><span className='text-yellow-500'>stack</span> <span className='text-purple-300'>developer</span></Link>
        </div>
        <label htmlFor="check" className="cursor-pointer lg:hidden">
          <i className="ri-menu-line text-2xl"></i>
        </label>
        <input type="checkbox" name="check" id="check" className="hidden" />
        <ul className="hidden lg:flex gap-4">
          <li><Link to="/" className="hover:text-purple-500 text-yellow-500 font-semibold">Home</Link></li>
          <li>
            <Link to={resume_pdf} className="hover:text-purple-500 text-yellow-500 font-semibold" 
                    target='_blank' rel='noopener noreferrer'>
                  Resume
            </Link>
          </li>
          <li><Link to="/portfolio" className="hover:text-purple-500 text-yellow-500 font-semibold">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-purple-500 text-yellow-500 font-semibold">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
