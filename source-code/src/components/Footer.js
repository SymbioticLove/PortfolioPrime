import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import PropTypes from 'prop-types';

function Footer({ scrollToTop }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isLinkActive = linkPath => {
    return currentPath === linkPath;
  };

  return (
    <div className="footer-container">
      <p className="footer-copyright">
        © {new Date().getFullYear()} Symbiotic Love
      </p>
      <div className="footer-nav-menu">
        <Link
          className={`footer-nav-link ${
            isLinkActive('/PortfolioPrime') ? 'active' : ''
          }`}
          to="/PortfolioPrime"
          onClick={scrollToTop}
        >
          Home
        </Link>
        <Link
          className={`footer-nav-link ${
            isLinkActive('/PortfolioPrime/Examples') ? 'active' : ''
          }`}
          to="/PortfolioPrime/Examples"
          onClick={scrollToTop}
        >
          Work Examples
        </Link>
        <a
          href="https://portfolioprime.youcanbook.me/"
          className="footer-nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Your Own
        </a>
        <a
          href="https://shop.symbiotic.love/pages/symbiotic-love-tos"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-nav-link"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

Footer.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

export default Footer;
