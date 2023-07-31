import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isLinkActive = (linkPath) => {
    return currentPath === linkPath;
  };

  return (
    <div className="header-container">
      <div className="logo-title">
        <div className="logo">
          <img src="https://placehold.co/150" alt="Logo" />
        </div>
        <div>
          <h1 className="title">PortfolioPrime</h1>
          <p className="subtitle">The last portfolio you'll ever need!</p>
        </div>
      </div>
      <div className="nav-menu">
        <Link className={`nav-link ${isLinkActive('/PortfolioPrime') ? 'active' : ''}`} to="/PortfolioPrime">Home</Link>
        <Link className={`nav-link ${isLinkActive('/PortfolioPrime/Examples') ? 'active' : ''}`} to="/PortfolioPrime/Examples">Work Examples</Link>
        <a href="https://example-shopify-link.com" className="nav-link nav-link2">Get Your Own Page!</a>
      </div>
    </div>
  );
};

export default Header;
