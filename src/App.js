// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PageHome from "./PageHome";
import PageFestival from "./PageFestival";
import PageOhjelma from "./PageOhjelma";
import "./App.css"; // Import your global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <img src={`${process.env.PUBLIC_URL}/pictures/nofelogo.svg`} alt="Logo" className="logo" />
          <Routes>
            <Route path="/" element={<PageHome />} /> {/* Default route */}
            <Route path="/pagefestival" element={<PageFestival />} />
            <Route path="/pageohjelma" element={<PageOhjelma />} />
            {/* Additional routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
