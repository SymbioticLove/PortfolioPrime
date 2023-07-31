import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className="description-container">
      <h2 className="description-title">Welcome to PortfolioPrime</h2>
      <p className="description-content">
        We are a small business with a development arm, providing a unique SaaS
        platform designed to create, host, maintain, and update client
        portfolios. These are all personally designed and customized. A client
        has absolute control over what goes on the screen, to the pixel,
        <span className="emphasis">
          {' '}
          and has permanent access, collaboration, optimization, deployment,
          hosting, maintenance, and updates{' '}
          <srong className="underline">for life</srong>.
        </span>{' '}
        Feel like a member of our team, working to showcase your unique talents
        and skills. Curious about other services? Get in touch! From business
        pages to eCommerce sites, we make any idea a web reality.
      </p>
    </div>
  );
};

export default Description;
