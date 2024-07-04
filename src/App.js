// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PageHome from "./PageHome";
import PageFestival from "./PageFestival";
import PageOhjelma from "./PageOhjelma";
import PageIlmo from "./Pageilmo";
import "./App.css"; // Import your global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar className="navbar" />
        <div className="content">
          <div className="content-block">
            <Routes>
              <Route path="/" element={<PageHome />} /> {/* Default route */}
              <Route path="/pagefestival" element={<PageFestival />} />
              <Route path="/pageohjelma" element={<PageOhjelma />} />
              <Route path="/pageilmo" element={<PageIlmo />} /> {/* New route for PageRAQ */}
              {/* Additional routes */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
