import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component
import Home from './Home';     // Import your page components
import About from './About';
import Schedule from './Schedule';
import CarouselBanner from './CarouselBanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <Router>
      <Navbar /> {/* This will include your navbar on every page */}
      <CarouselBanner /> {/* Include the Carousel here */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;