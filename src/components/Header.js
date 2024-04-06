import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photo from './photo.png';
import { HiStatusOnline } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { FaInfoCircle } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdOnlinePrediction } from "react-icons/md";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-400 shadow-md fixed w-full z-10 top-0">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-2">
        <span className='flex items-center gap-2'><img src={photo} className="h-16 w-auto rounded-full" alt="Profile" />
        <span className='font-bold text-xl'>Next-Gen Library</span></span>
        {/* Desktop view: tabs */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="flex text-2sm font-semibold items-center gap-1 hover:underline">
            <MdHome size={25} />
            <span>HOME</span>
          </Link>
          <Link to="/about" className="flex text-sm font-semibold items-center gap-1 hover:underline">
            <FaInfoCircle size={20}/>
            <span>ABOUT</span>
          </Link>
          <Link to="/submit_data" className="flex text-sm font-semibold items-center gap-1 hover:underline">
            <MdOnlinePrediction size={20}/>
            <span>BOOK RECOMMENDER</span>
          </Link>
          <Link to="/librarystatus" className="flex text-sm font-semibold items-center gap-1 hover:underline">
            <HiStatusOnline size={20}/>
            <span>LIBRARY STATUS</span>
          </Link>
          <Link to="/bookavailability" className="flex text-sm font-semibold items-center gap-1 hover:underline">
          <MdEventAvailable size={20}/>
            <span>BOOK AVAILABILITY</span>
          </Link>
          <Link to="/contact" className="flex text-sm font-semibold items-center gap-1 hover:underline">
            <IoMdContact size={20} />
            <span>CONTACT</span>
          </Link>
        </nav>

        {/* Hamburger menu for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown menu for mobile view */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white rounded-md shadow-md z-20 md:hidden">
            <ul className="text-lg font-bold p-4">
              <li>
                <Link to="/" className="flex items-center gap-1 underline" onClick={toggleMenu}>
                  <MdHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-1 underline" onClick={toggleMenu}>
                <FaInfoCircle/>
            <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/librarystatus" className="flex items-center gap-1 underline" onClick={toggleMenu}>
                  <HiStatusOnline />
                  <span>Library Status</span>
                </Link>
              </li>
              <li>
                <Link to="/submit_data" className="flex items-center gap-1 underline" onClick={toggleMenu}>
                  <HiStatusOnline />
                  <span>Book Recommender</span>
                </Link>
              </li>
              <li>
                <Link to="/bookavailability" className="flex items-center gap-1 underline" onClick={toggleMenu}>
                  <MdOnlinePrediction />
                  <span>Book Availability</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-1 underline" onClick={toggleMenu}>
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
