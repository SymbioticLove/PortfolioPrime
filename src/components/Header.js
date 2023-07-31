import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ scrollToTop }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isLinkActive = linkPath => {
    return currentPath === linkPath;
  };

  return (
    <div className="header-container">
      <div className="logo-title">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/PPLogo.png`} alt="Logo" />
        </div>
        <div>
          <h1 className="title">PortfolioPrime</h1>
          <p className="subtitle">The last portfolio you&apos;ll ever need!</p>
        </div>
      </div>
      <div className="nav-menu">
        <Link
          className={`nav-link ${
            isLinkActive('/PortfolioPrime') ? 'active' : ''
          }`}
          to="/PortfolioPrime"
          onClick={scrollToTop}
        >
          Home
        </Link>
        <Link
          className={`nav-link ${
            isLinkActive('/PortfolioPrime/Examples') ? 'active' : ''
          }`}
          to="/PortfolioPrime/Examples"
          onClick={scrollToTop}
        >
          Work Examples
        </Link>
        <a
          href="https://shop.symbiotic.love/products/portfolio-resume-web-page"
          className="nav-link nav-link2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Your Own Page!
        </a>
      </div>
    </div>
  );
};

Header.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

export default Header;
