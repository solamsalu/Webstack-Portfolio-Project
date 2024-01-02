// AddRental.js
import React, { useState } from 'react';
import axios from 'axios';

const AddRental = () => {
  const [userId, setUserId] = useState('');
  const [carId, setCarId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    // Make a POST request to add a new rental
    axios.post('http://localhost:3001/api/rentals', { userId, carId, startDate, endDate })
      .then(response => {
        console.log('Rental added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding rental:', error);
      });
  };

  return (
    <div>
      <h1>Add Rental</h1>
      <form onSubmit={handleSubmit}>
        <label>User ID: <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} /></label>
        <label>Car ID: <input type="text" value={carId} onChange={(e) => setCarId(e.target.value)} /></label>
        <label>Start Date: <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></label>
        <label>End Date: <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} /></label>
        <button type="submit">Add Rental</button>
      </form>
    </div>
  );
};

export default AddRental;
