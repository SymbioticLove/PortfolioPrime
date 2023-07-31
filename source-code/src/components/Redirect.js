import React from 'react';
import './Redirect.css';

const Redirect = () => {
  return (
    <div className="redirect-container">
      <h3 className="redirect-title">Get Started with Your Portfolio Today!</h3>
      <a
        href="https://shop.symbiotic.love/products/portfolio-resume-web-page"
        className="redirect-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Shopify
      </a>
    </div>
  );
};

export default Redirect;
