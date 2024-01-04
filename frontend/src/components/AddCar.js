// AddCar.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    // Make a POST request to add a new car
    axios.post('http://localhost:3001/api/cars', { name, description, price, image })
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
        <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></label>
        <label>Price: <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></label>
        <label>Image: <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /></label>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
