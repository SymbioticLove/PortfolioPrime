import React from 'react';
import './Redirect.css';

const Redirect = () => {
  return (
    <div className="redirect-container">
      <h3 className="redirect-title">Get Started with Your Portfolio Today!</h3>
      <iframe
        src="https://portfolioprime.youcanbook.me/?
              embed=true"
        id="ycbm"
        frameBorder="0"
        title="Schedule a Consultation!"
      ></iframe>
    </div>
  );
};

export default Redirect;
