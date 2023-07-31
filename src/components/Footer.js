import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isLinkActive = (linkPath) => {
    return currentPath === linkPath;
  };

  return (
    <div className="footer-container">
      <p className="footer-copyright">© {new Date().getFullYear()} Symbiotic Love</p>
      <div className="footer-nav-menu">
        <Link className={`footer-nav-link ${isLinkActive('/PortfolioPrime') ? 'active' : ''}`} to="/PortfolioPrime">Home</Link>
        <Link className={`footer-nav-link ${isLinkActive('/PortfolioPrime/Examples') ? 'active' : ''}`} to="/PortfolioPrime/Examples">Work Examples</Link>
        <a href="https://example-shopify-link.com" className="footer-nav-link">Get Your Own</a>
        <a href="https://your-privacy-policy-link.com" className="footer-nav-link">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
