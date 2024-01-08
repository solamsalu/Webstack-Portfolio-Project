// CarList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteCar from './DeleteCar';
import './CarList.css';

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

  // Assuming car has properties like name, price, and description
  return (
    <div>
      <h2>Car s List</h2>
      {cars.map(car => (
        <div key={car._id}>
          <h3>{car.name}</h3>
          <p>Price: {car.price}</p>
          <p>Description: {car.description}</p>
          {/* <DeleteCar car={car} onDelete={handleDeleteCar} /> */}
        </div>
      ))}
    </div>
  );

};

export default CarList;
