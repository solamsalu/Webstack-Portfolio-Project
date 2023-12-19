import React, { useState } from 'react';
import axios from 'axios';

const CarForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = () => {
    // Make a POST request to add a new car
    axios.post('http://localhost:3001/api/cars', { make, model, year })
      .then(response => {
        console.log('Car added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding car:', error);
      });
  };

  return (
    <div>
      <h1>Add Car</h1>
      <form onSubmit={handleSubmit}>
        <label>Make: <input type="text" value={make} onChange={(e) => setMake(e.target.value)} /></label>
        <label>Model: <input type="text" value={model} onChange={(e) => setModel(e.target.value)} /></label>
        <label>Year: <input type="number" value={year} onChange={(e) => setYear(e.target.value)} /></label>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CarForm;
