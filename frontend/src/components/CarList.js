// CarList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteCar from './DeleteCar';

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

  const handleDeleteCar = (deletedCarId) => {
    // Remove the deleted car from the car list
    setCars(prevCars => prevCars.filter(car => car._id !== deletedCarId));
  };

  return (
    <div>
      <h2>Car List</h2>
      {cars.map(car => (
        <DeleteCar key={car._id} car={car} onDelete={handleDeleteCar} />
      ))}
    </div>
  );
};

export default CarList;
