import React from 'react';
import FrameContainerFolio from './FrameContainerFolio';
import FrameContainerLP from './FrameContainerLP';
import FrameContainerBusiness from './FrameContainerBusiness';
import './Examples.css';

function Examples() {
  return (
    <div className="examples-container">
      <h3 className="mobile-layout">
        Visit on PC or tablet for layout comparisons!
      </h3>
      <FrameContainerFolio />
      <FrameContainerLP />
      <FrameContainerBusiness />
    </div>
  );
}

export default Examples;
