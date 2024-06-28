import React from 'react';
import "./App.css"; // Import your global styles

const PageOhjelma = () => {
  return (
    <div>
      <p className="big-text-white">
        <span className="big-text-white">Perjantai</span>
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/pictures/homepic.svg`}
        alt="Home"
        className="home-pic"
      />
    </div>
  );
};

export default PageOhjelma;
