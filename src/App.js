// App.js
import React from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PageHome from "./PageHome";
import PageFestival from "./PageFestival";
import PageOhjelma from "./PageOhjelma";
import PageIlmo from "./Pageilmo";
import ScrollToTop from "./ScrollToTop"; // Import the ScrollToTop component
import "./App.css"; // Import your global styles

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <div className="App">
        <Navbar className="navbar" />
        <div className="content">
          <div className="content-block">
            <Routes>
              <Route path="/" element={<PageHome />} /> {/* Default route */}
              <Route path="/pagefestival" element={<PageFestival />} />
              <Route path="/pageohjelma" element={<PageOhjelma />} />
              <Route path="/pageilmo" element={<PageIlmo />} /> {/* Route for PageIlmo */}
              {/* Additional routes */}
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
