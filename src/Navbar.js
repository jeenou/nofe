// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar styles

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Brand</Link>
          <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pagefestival">Festivaali</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pageohjelma">Ohjelma</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pageilmo">Ilmoittautuminen</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleDropdown}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pagefestival" onClick={toggleDropdown}>Festivaali</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pageohjelma" onClick={toggleDropdown}>Ohjelma</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pageilmo" onClick={toggleDropdown}>Ilmoittautuminen</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
