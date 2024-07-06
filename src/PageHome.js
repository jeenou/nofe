import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
      <div className="mobile-links"> {/* Add a container for mobile links */}
        <Link className="big-text-red mobile-link" to="/pagefestival">Festivaali</Link>
        <Link className="big-text-red mobile-link" to="/pageohjelma">Ohjelma</Link>
        <Link className="big-text-red mobile-link" to="/pageilmo">Ilmoittautuminen</Link>
      </div>
    </div>
  );
};

export default PageHome;
