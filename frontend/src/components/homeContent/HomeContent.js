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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeContent.css';

const HomeContent = () => {
  // Create a state variable to store the car data
  const [car, setCar] = useState(null);

  // Use the useEffect hook to fetch the data from the server
  useEffect(() => {
    // Define the fetch function
    const fetchCar = async () => {
      // Get the car id from the URL params
      const carId = window.location.pathname.split('/')[2];
      // Make a GET request to the server
      const response = await fetch('http://localhost:3001/cars/' + carId);
      // Check if the response is successful
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();
        // Update the state with the data
        setCar(data);
      } else {
        // Handle the error
        console.error('Something went wrong');
      }
    };
    // Call the fetch function
    fetchCar();
  }, []); // Pass an empty dependency array to run the effect only once

  // Return the JSX element
  return (
    <section className="car-list">
      <h2>Choose Your Car</h2>
      <p>We have a variety of cars to suit your needs and budget.</p>
      <div className="car-grid">
        {car ? (
          <div className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <p>${car.price} per day</p>
            <Link to={`/cars/${car.id}`}>Book Now</Link>
          </div>
        ) : (
          <p>Loading car...</p>
        )}
      </div>
    </section>
  );
};

export default HomeContent;


