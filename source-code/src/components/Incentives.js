import React, { useEffect } from 'react';
import './Incentives.css';
import gsap from 'gsap';

// Global variable to keep track of whether animations have run
let animationsHaveRun = false;

const Incentives = () => {
  useEffect(() => {
    // Only run animations if they have not run before
    if (!animationsHaveRun) {
      animationsHaveRun = true;
      const tl = gsap.timeline({
        defaults: { ease: 'power1.out' },
        delay: 8,
      });

      tl.fromTo(
        '.incentives-title',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
      )
        .fromTo(
          '.incentives-list-item',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
        )
        .fromTo(
          '.incentives-list-item::before',
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, bounce: 0.3, stagger: 0.2 },
          '-=1.5',
        );
    }
  }, []);

  return (
    <div className="incentives-container">
      <h2 className="incentives-title">Why Choose Us?</h2>
      <ul className="incentives-list">
        <li className="incentives-list-item">
          $0 upfront costs
          <p>
            You pay nothing until your project is ready to go live. You will
            only be charged once you have approved and signed-off on the work.
          </p>
        </li>
        <li className="incentives-list-item">
          Unbeatable prices and payment through ShopPay
          <p>
            With prices starting at $225, and installment payments available
            through ShopPay, you can get online for as little as $20.
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
          Copywriting and CV assistance
          <p>
            Your success is important to us. We offer assistance with writing
            resumes, cover letters, and portfolio copywrite.
          </p>
        </li>
        <li className="incentives-list-item">
          Design assistance
          <p>
            Your portfolio will always help you stand out. We can provide
            assistance with colors, typography, structure, and more.
          </p>
        </li>
        <li className="incentives-list-item">
          Not a CMS/web builder project
          <p>
            This is not a CMS or web builder project, and there are no ongoing
            fees. It is an individually hosted and permanently managed personal
            page.
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
            personality. Our customized design ensures it&apos;s tailored to
            you.
          </p>
        </li>
        <li className="incentives-list-item">
          Fast development time
          <p>
            Time is your most valuable asset, and we strive to get you online as
            soon as possible. We can have a simple page designed, optimized, and
            deployed in as little as 3 days.
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
