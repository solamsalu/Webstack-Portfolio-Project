import React from 'react';
import axios from 'axios';

const CarItem = ({ car }) => {
  const handleDelete = () => {
    // Make a DELETE request to delete the car
    axios.delete(`http://localhost:3001/api/cars/${car._id}`)
      .then(response => {
        console.log('Car deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting car:', error);
      });
  };

  return (
    <div>
      <p>{car.make} - {car.model} ({car.year})</p>
      <button onClick={handleDelete}>Delete Car</button>
    </div>
  );
};

export default CarItem;
