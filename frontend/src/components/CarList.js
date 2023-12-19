import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch all cars
    axios.get('http://localhost:3001/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map(car => (
          <li key={car._id}>{car.make} - {car.model} ({car.year})</li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
