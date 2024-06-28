// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PageHome from "./PageHome";
import PageFestival from "./PageFestival";
import PageOhjelma from "./PageOhjelma";
import PageRAQ from "./PageRAQ"; // Import the new PageRAQ component
import "./App.css"; // Import your global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar className="navbar" />
        <img
          src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`}
          alt="Logo"
          className="logo"
        />
        <div className="content">
          <div className="content-block">
            <Routes>
              <Route path="/" element={<PageHome />} /> {/* Default route */}
              <Route path="/pagefestival" element={<PageFestival />} />
              <Route path="/pageohjelma" element={<PageOhjelma />} />
              <Route path="/pageraq" element={<PageRAQ />} /> {/* New route for PageRAQ */}
              {/* Additional routes */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
