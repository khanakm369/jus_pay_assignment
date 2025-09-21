import React, { useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './sideBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='navBar-layout'>
      <div className='navbar-header'>
        <button onClick={toggleMenu} className='hamburger-btn'>
          <RxHamburgerMenu className="hamburger-icon" />
        </button>
      </div>

      {/* Sidebar toggled */}
      <div className={`sidebar-wrapper ${isOpen ? 'open' : 'closed'}`}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;