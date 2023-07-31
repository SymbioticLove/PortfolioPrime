import React from 'react';
import './FrameContainer.css';

function FrameContainerBusiness() {
  return (
    <div className="frame-container">
      <h1>Businesss Pages</h1>
      <h3 className="web">Web Layout</h3>
      <iframe
        src="https://symbiotic.love"
        width="90%"
        height="800px"
        title="WebLayoutBizPage"
      ></iframe>
      <div className="lower-frame-container">
        <div className="tablet">
          <h3>Tablet/Laptop Layout</h3>
          <iframe
            src="https://symbiotic.love"
            width="900px"
            height="500px"
            title="TabLayoutBizPage"
          ></iframe>
        </div>
        <div className="mobile">
          <h3>Mobile Layout</h3>
          <iframe
            src="https://symbiotic.love"
            width="412px"
            height="650px"
            title="MblLayoutBizPage"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FrameContainerBusiness;
