// // HomeContent.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomeContent.css';

// const HomeContent = () => {
//   return (
//     <section className="home-content">
//       <div>
//         <h2>Make Your Journey Memorable</h2>
//         <p>Rent a car and explore your dream destinations at your own pace.</p>
//         <Link to="/login">Login or Signup</Link>
//       </div>
//     </section>
//   );
// };

// export default HomeContent;


// HomeContent.js
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './HomeContent.css';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeContent = () => {
  const [car, setCar] = useState(null);
  const { carName } = useParams();

  const fetchCar = useCallback(async () => {
    try {
      // Fetch the data from the server using axios
      const response = await axios.get(`http://localhost:3001/api/cars/${carName}`);
      setCar(response.data);


      // Check if the response is successful
      if (response.data) {
        // Update the state with the car data
        const updatedCar = {
          ...response.data,
          images: response.data.images.map(image => `http://localhost:3001${image}`),
        };
        setCar(updatedCar); // Fix: setCar with updatedCar instead of response.data
      } else {
        // Handle the error
        console.error('Car not found');
      }
    } catch (error) {
      // Handle the error
      console.error('Error fetching car data:', error);
    }
  }, [carName]);

  useEffect(() => {
    fetchCar();
  }, [fetchCar]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleBook = () => {
    if (car) {
      toast.success(`You have booked ${car.name} for ${car.price} per day!`);
    } else {
      toast.error('Car not available for booking.');
    }
  };

  return (
    <section className="car-list">
      <h2>Choose Your Car</h2>
      <p>We have a variety of cars to suit your needs and budget.</p>
      <div className="car-grid">
        {car ? (
          <div className="car-card">
            <Slider {...settings}>
              {car.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={car.name} />
                </div>
              ))}
            </Slider>
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <p>${car.price} per day</p>
            <button onClick={handleBook}>Book Now</button>
          </div>
        ) : (
          <p>Loading car...</p>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default HomeContent;






