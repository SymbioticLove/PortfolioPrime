import React from 'react';
import './FrameContainer.css';

function FrameContainerFolio() {
  return (
    <div className="frame-container">
      <h1>Portfolio Websites</h1>
      <h3 className="web">Web Layout</h3>
      <iframe
        src="https://symbioticlove.github.io/Portfolio/"
        width="90%"
        height="800px"
        title="WebLayoutFolio"
      ></iframe>
      <div className="lower-frame-container">
        <div className="tablet">
          <h3>Tablet/Laptop Layout</h3>
          <iframe
            src="https://symbioticlove.github.io/Portfolio/"
            width="1000px"
            height="550px"
            title="TabLayoutFolio"
          ></iframe>
        </div>
        <div className="mobile">
          <h3>Mobile Layout</h3>
          <iframe
            src="https://symbioticlove.github.io/Portfolio/"
            width="412px"
            height="650px"
            title="MblLayoutFolio"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FrameContainerFolio;
