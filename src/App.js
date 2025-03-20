import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Deliverable from './pages/Deliverable';
import Audience from './pages/Audience';
import CampaignDesign from './pages/CampaignDesign';
import Summary from './pages/Summary';
import { CampaignProvider } from './context/CampaignContext';
import './styles.css';
import './styles/Sidebar.css';
import './styles/Deliverable.css';
import './styles/Audience.css';
import './styles/CampaignDesign.css';
import './styles/Summary.css';
import './styles/Header.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <CampaignProvider>
      <Router>
        <div className="app">
          <Header />
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/deliverable" element={<Deliverable />} />
              <Route path="/audience" element={<Audience />} />
              <Route path="/campaign-design" element={<CampaignDesign />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CampaignProvider>
  );
}

export default App; 