import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="bg-gray-900 shadow-md fixed top-0 w-full z-10">
      <div className="flex justify-between items-center max-w-4xl mx-auto p-3">
        <p>
          <h1 className="font-bold text-2sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-200">Web</span>
            <span className="text-slate-400">Builder</span>
          </h1>
        </p>
        <div className="flex items-center">
          <form className="bg-slate-200 p-2 gap-2 rounded-lg flex items-center mr-2 ">
            <FaSearch className="text-black" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64 text-slate-200"
            />
          </form>
          <div className="sm:hidden">
            <button className="text-slate-200" onClick={toggleSidebar}>
              ☰
            </button>
          </div>
          <ul className="hidden sm:flex gap-4 text-slate-200">
            <li className="hover:underline">Categories</li>
            <li className="hover:underline">Website Builders</li>
            <li className="hover:underline">Today's deals</li>
          </ul>
        </div>
      </div>
      {/* Sidebar */}
      {showSidebar && (
        <div className="bg-gray-900 text-slate-200 h-full w-56 fixed top-0 left-0 overflow-y-auto z-20">
          <ul className="p-4">
            <li className="hover:underline">Categories</li>
            <li className="hover:underline">Website Builders</li>
            <li className="hover:underline">Today's deals</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
