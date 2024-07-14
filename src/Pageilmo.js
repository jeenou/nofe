import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PageIlmo = () => {
  return (
    <div className="content">
      <img
        src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`}
        alt="Logo"
        className="logo"
      />
      <div className="content-block text-container">
      </div>
      <a href="https://forms.gle/jN7dybmQt7NU1JzM7" className="big-text-red">
        Ilmoittaudu Festareille tästä!
      </a>
      <div className="mobile-links"> {/* Add a container for mobile links */}
        <Link className="big-text-red mobile-link" to="/">Home</Link>
        <Link className="big-text-red mobile-link" to="/pagefestival">Festivaali</Link>
        <Link className="big-text-red mobile-link" to="/pageohjelma">Ohjelma</Link>
      </div>
    </div>
  );
};

export default PageIlmo;
