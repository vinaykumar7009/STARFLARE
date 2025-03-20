import React from 'react';
import { FaSearch, FaRegBell } from 'react-icons/fa';
import { IoApps } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="logo">STARFLARE</h1>
      </div>
      
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      
      <div className="header-right">
        <button className="icon-button">
          <IoApps />
        </button>
        <button className="icon-button notification">
          <FaRegBell />
          <span className="notification-dot"></span>
        </button>
        <div className="profile">
          <img 
            src="https://via.placeholder.com/32" 
            alt="Profile" 
            className="profile-image" 
          />
        </div>
        <button className="icon-button">
          <IoSettingsOutline />
        </button>
      </div>
    </header>
  );
};

export default Header; 