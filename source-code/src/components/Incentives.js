import React from 'react';
import './Incentives.css';

const Incentives = () => {
  return (
    <div className="incentives-container">
      <h2 className="incentives-title">Why Choose Us?</h2>
      <ul className="incentives-list">
        <li className="incentives-list-item">
          Unbeatable prices and payment through ShopPay
          <p>
            With prices starting at $225, and installment payments available
            through ShopPay, you can get online for as little as $20!
          </p>
        </li>
        <li className="incentives-list-item">
          Free hosting, updates, and lifetime support
          <p>
            We handle all the technical details so you can focus on what&apos;s
            important. Never worry about server costs or technical hiccups
            again.
          </p>
        </li>
        <li className="incentives-list-item">
          Not a CMS/Web builder project
          <p>
            This is not a CMS or Web builder project, it is an individually
            hosted and permanently managed personal page.
          </p>
        </li>
        <li className="incentives-list-item">
          Easy access to source code
          <p>
            With full access to your portfolio&apos;s source code, you maintain
            complete control. Customize and extend it as you see fit.
          </p>
        </li>
        <li className="incentives-list-item">
          Fully customized design
          <p>
            Your portfolio is a reflection of your unique skills and
            personality. Our customized design ensures it&apos;s tailored just
            for you.
          </p>
        </li>
        <li className="incentives-list-item">
          Permanent portfolio/resume solution
          <p>
            With our service, your portfolio is forever. Showcase your work and
            experience on a platform that grows with you.
          </p>
        </li>
        <li className="incentives-list-item">
          Simple CI/CD pipeline through GitHub Actions for seamless and timely
          updates
          <p>
            Keep your portfolio up-to-date with the latest technologies and
            trends. Our CI/CD pipeline ensures smooth updates, allowing you to
            always put your best foot forward.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Incentives;
