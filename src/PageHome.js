// PageHome.js
import React from 'react';
import './App.css'; // Import your global styles

const PageHome = () => {
  return (
    <div className="content">
      <img
        src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`}
        alt="Logo"
        className="logo"
      />
      <div className="text-container">
        <p className="big-text">
          <span className="big-text-white">Never. Stop. The </span>
          <span className="big-text-red">Madness</span>
        </p>
        <p className="middle-text">
          <span className="middle-text-grey">9.-11.8.2024</span>
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/pictures/homepic.svg`}
        alt="Home"
        className="home-pic"
      />
    </div>
  );
};

export default PageHome;
