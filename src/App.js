// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Schedule from "./Schedule";
import CarouselBanner from "./CarouselBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles.css";

const App = () => {
  const outerFrameStyle = {
    backgroundColor: "#282c34", // Outer background color
    padding: "30px", // Adjust padding to control spacing around the inner background
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  const innerBackgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/pictures/background.png?v=2)`, // Append a version query parameter
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px", // Adjust padding to control spacing around the carousel
    width: "70%", // Adjust this to control the width of the inner background
    maxWidth: "1200px", // Optional maximum width
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Router>
      <div style={outerFrameStyle}>
        <header className="App-header" style={innerBackgroundStyle}>
          <Navbar />
          <CarouselBanner />
        </header>
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
