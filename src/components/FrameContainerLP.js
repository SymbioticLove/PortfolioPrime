import React from 'react';
import './FrameContainer.css';

function FrameContainerLP() {
  return (
    <div className="frame-container">
      <h1>Product Landing Pages</h1>
      <h3 className="web">Web Layout</h3>
      <iframe
        src="https://symbioticlove.github.io/Built-Demo-Product-Page/#home"
        width="90%"
        height="800px"
        title="WebLayoutLP"
      ></iframe>
      <div className="lower-frame-container">
        <div className="tablet">
          <h3>Tablet/Laptop Layout</h3>
          <iframe
            src="https://symbioticlove.github.io/Built-Demo-Product-Page/#home"
            width="900px"
            height="500px"
            title="TabLayoutLP"
          ></iframe>
        </div>
        <div className="mobile">
          <h3>Mobile Layout</h3>
          <iframe
            src="https://symbioticlove.github.io/Built-Demo-Product-Page/#home"
            width="412px"
            height="650px"
            title="MblLayoutLP"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FrameContainerLP;
