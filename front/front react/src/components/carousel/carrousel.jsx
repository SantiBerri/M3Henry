import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import image1 from '../../assets/images/pizza1.jpg';
import image2 from '../../assets/images/pizza2.jpg';
import image3 from '../../assets/images/pizza3.png';
import './carousel.css'

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
