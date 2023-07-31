import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Examples from './components/Examples';

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function App() {
  return (
    <div>
      <Router>
        <Header scrollToTop={scrollToTop} />
        <Routes>
          <Route path="/" element={<Navigate to="/PortfolioPrime" replace />} />
          <Route path="/PortfolioPrime" element={<Homepage />} />
          <Route path="/PortfolioPrime/Examples" element={<Examples />} />
        </Routes>
        <Footer scrollToTop={scrollToTop} />
      </Router>
    </div>
  );
}

export default App;
