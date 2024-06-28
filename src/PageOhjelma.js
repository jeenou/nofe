// PageOhjelma.js
import React from 'react';
import "./App.css"; // Import your global styles

const PageOhjelma = () => {
  return (
    <div className="content">
      <div className="text-container">
        <p className="big-text-white">
          <span>Perjantai</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti1.svg`}
          alt="Perjantai Artist 1"
          className="home-pic"
        />
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti2.svg`}
          alt="Perjantai Artist 2"
          className="home-pic"
        />
        <img
          src={`${process.env.PUBLIC_URL}/pictures/pe-artisti4.svg`}
          alt="Perjantai Artist 3"
          className="home-pic"
        />
        <p className="big-text-white">
          <span>Lauantai</span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti1.svg`}
          alt="Lauantai Artist 1"
          className="home-pic"
        />
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti2.svg`}
          alt="Lauantai Artist 2"
          className="home-pic"
        />
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti3.svg`}
          alt="Lauantai Artist 3"
          className="home-pic"
        />
        <img
          src={`${process.env.PUBLIC_URL}/pictures/la-artisti5.svg`}
          alt="Lauantai Artist 4"
          className="home-pic"
        />
      </div>
    </div>
  );
};

export default PageOhjelma;
