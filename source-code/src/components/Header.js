import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

const Header = ({ scrollToTop }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isLinkActive = linkPath => {
    return currentPath === linkPath;
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.fromTo(
      '.logo',
      { y: -100, opacity: 0 },
      { y: -10, opacity: 1, duration: 1, ease: 'power3.out' },
    )
      .fromTo(
        '.title',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.25, ease: 'sine.out' },
        '-=0.5',
      )
      .fromTo(
        '.subtitle',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'sine.out' },
        '-=0.5',
      )
      .fromTo(
        '.nav-link',
        { y: -5, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'sine.out', stagger: 0.2 },
        '+=.4',
      )
      .then(() => {
        document.querySelectorAll('.nav-link').forEach(el => {
          el.style.transform = '';
        });
      });
  }, []);

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
          href="https://portfolioprime.youcanbook.me/"
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
