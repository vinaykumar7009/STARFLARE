import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header />
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout; 