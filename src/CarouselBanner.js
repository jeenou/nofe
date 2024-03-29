import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselBanner = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* React Bootstrap Carousel */}
      <Carousel interval={3000} wrap={true} touch={true}>
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
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/pictures/banner3.jpg`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Overlay Image Container */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}>
        <img src={`${process.env.PUBLIC_URL}/overlay.svg`} alt="Overlay" style={{ maxHeight: '100px' }} />
      </div>
    </div>
  );
};

export default CarouselBanner;
