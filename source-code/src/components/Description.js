import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Description.css';

// Global variable to keep track of whether animations have run
let animationsHaveRun = false;

const Description = () => {
  useEffect(() => {
    // Only run animations if they have not run before
    if (!animationsHaveRun) {
      animationsHaveRun = true; // Set flag to true since animations are running now
      const tl = gsap.timeline({ delay: 3.5 });

      tl.fromTo(
        '.description-title',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
      ).fromTo(
        '.description-content',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5 },
      );
    }
  }, []);

  return (
    <div className="description-container">
      <h2 className="description-title">Welcome to PortfolioPrime</h2>
      <p className="description-content">
        We are a small business with a development arm providing a unique SaaS
        platform designed to create, update, and host modern and unique custom
        portfolio and resume websites. The client (that&apos;s you!) has
        absolute control over what goes on the screen, to the pixel, and has
        <span className="emphasis">
          {' '}
          permanent access, collaboration, optimization, deployment, hosting,
          maintenance, and updates{' '}
          <strong className="underline">for life</strong>.
        </span>{' '}
        Feel like a member of our team, working to showcase your unique talents
        and skills. Need help copywriting or hooking clients and employers? We
        do that, too! As long as the internet is around (and if the internet is
        gone, we&apos;re facing an apocalypse-level situation!), this is the
        last time that you&apos;ll ever spend longer than 2 minutes updating, or
        more than 10 seconds finding, your portfolio or resume. And you&apos;ll{' '}
        <strong className="underline">never</strong> have to make another one!
        Curious about other services? Get in touch! From business pages to
        eCommerce sites, we make any idea a web reality.
      </p>
    </div>
  );
};

export default Description;
