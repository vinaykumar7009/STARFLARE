import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChartBar, FaPlus, FaUsers, FaUser, FaShippingFast, FaComments, FaCreditCard, FaDollarSign } from 'react-icons/fa';

const Sidebar = ({ isOpen, onToggle }) => {
  const menuItems = [
    { icon: <FaChartBar />, text: 'Dashboard', path: '/dashboard' },
    { icon: <FaUsers />, text: 'My Campaign', path: '/my-campaign' },
    { icon: <FaPlus />, text: 'Add Campaign', path: '/add-campaign' },
    { icon: <FaUser />, text: 'F&B Campaign', path: '/fb-campaign' },
    { icon: <FaUsers />, text: 'Influencer', path: '/influencer' },
    { icon: <FaUser />, text: 'Profile', path: '/profile' },
    { icon: <FaShippingFast />, text: 'Shipping', path: '/shipping' },
    { icon: <FaComments />, text: 'Chat', path: '/chat' },
    { icon: <FaCreditCard />, text: 'Payment', path: '/payment' },
    { icon: <FaDollarSign />, text: 'Pricing', path: '/pricing' },
  ];

  return (
    <>
      <button className="hamburger-button" onClick={onToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="logo">STARFLARE</h1>
        </div>
        
        <div className="sidebar-content">
          <h2>Overview</h2>
          <nav className="sidebar-nav">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path}
                className="nav-item"
                onClick={() => window.innerWidth <= 768 && onToggle()}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.text}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      {isOpen && <div className="sidebar-overlay" onClick={onToggle} />}
    </>
  );
};

export default Sidebar;