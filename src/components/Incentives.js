import React from 'react';
import './Incentives.css';

const Incentives = () => {
  return (
    <div className="incentives-container">
      <h2 className="incentives-title">Why Choose Us?</h2>
      <ul className="incentives-list">
        <li className="incentives-list-item">
          Free hosting, updates, and lifetime support
          <p>We handle all the technical details so you can focus on what's important. Never worry about server costs or technical hiccups again.</p>
        </li>
        <li className="incentives-list-item">
          Easy access to source code
          <p>With full access to your portfolio's source code, you maintain complete control. Customize and extend it as you see fit.</p>
        </li>
        <li className="incentives-list-item">
          Fully customized design
          <p>Your portfolio is a reflection of your unique skills and personality. Our customized design ensures it's tailored just for you.</p>
        </li>
        <li className="incentives-list-item">
          Permanent portfolio/resume solution
          <p>With our service, your portfolio is forever. Showcase your work and experience in a platform that grows with you.</p>
        </li>
        <li className="incentives-list-item">
          Simple CI/CD pipeline through GitHub Actions for seamless and timely updates
          <p>Keep your portfolio up-to-date with the latest technologies and trends. Our CI/CD pipeline ensures smooth updates, allowing you to always put your best foot forward.</p>
        </li>
      </ul>
    </div>
  );
};

export default Incentives;