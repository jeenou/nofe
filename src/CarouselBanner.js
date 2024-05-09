// CarouselBanner.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const CarouselBanner = () => {
  return (
    <div className="carousel-banner">
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/pictures/banner1.jpg`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/pictures/banner2.jpg`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="d-block w-100"
            src={`${process.env.PUBLIC_URL}/pictures/banner3.jpg`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="overlay-image">
        <img src={`${process.env.PUBLIC_URL}/overlay.svg`} alt="Overlay" />
      </div>
    </div>
  );
};

export default CarouselBanner;
