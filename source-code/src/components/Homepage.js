import React from 'react';
import Description from './Description';
import Tiers from './Tiers';
import Incentives from './Incentives';
import Redirect from './Redirect';
import Contact from './Contact';

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Description component */}
      <Description />

      {/* Incentives component */}
      <Incentives />

      {/* Tiers component */}
      <Tiers />

      {/* Redirect component */}
      <Redirect />

      {/* Contact component */}
      <Contact />
    </div>
  );
};

export default Homepage;
