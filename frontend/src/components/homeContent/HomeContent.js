// HomeContent.js
import React, { useState } from 'react';
import './HomeContent.css';
import Slider from 'react-slick';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

const HomeContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use the public URL for the images
  const bannerImages = [
    '/img/home/hero-1.png',
    '/img/dashboard/banner.jpg',
    '/img/dashboard/02.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {bannerImages.map((image, index) => (
          <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <div className="caption">
        <h1>Rent a Car</h1>
        <p>Choose from our wide selection of luxury vehicles</p>
        <Button variant="contained">Book Now</Button>
      </div>
    </div>
  );
};

export default HomeContent;
