// PageRAQ.js
import React from 'react';

const PageRAQ = () => {
  return (
    <div className="content">
      <img
        src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`}
        alt="Logo"
        className="logo"
      />
      <div className="content-block text-container">
        <p className="big-text-white">
          <span>Rarely Asked Questions</span>
        </p>
      </div>
    </div>
  );
};

export default PageRAQ;
