// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top"> {/* Added fixed-top class */}
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* Home link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pagefestival">Festivaali</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pageohjelma">Ohjelma</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pageilmo">Ilmoittautuminen</Link> {/* RAQ link */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
