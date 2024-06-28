// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">YourBrand</Link>

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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
