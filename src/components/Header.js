import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photo from './photo.png';
import { HiStatusOnline } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-400 shadow-md fixed w-full z-10 top-0">
      <div className="flex justify-between items-center max-w-6xl ml-6 p-1">
        <img src={photo} className="h-16 w-auto rounded-full" alt="Profile" />
        {/* Hamburger menu for mobile view */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white rounded-md shadow-md z-20">
            <ul className="text-lg font-bold p-4">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:underline" onClick={toggleMenu}>
                  <MdHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/librarystatus" className="flex items-center gap-2 hover:underline" onClick={toggleMenu}>
                  <HiStatusOnline />
                  <span>Library Status</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:underline" onClick={toggleMenu}>
                  <IoMdContact />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
