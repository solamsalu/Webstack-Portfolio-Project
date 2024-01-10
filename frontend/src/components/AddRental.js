import React, { useState } from 'react';
import axios from 'axios';

const AddRental = ({ car }) => {
  const [rentalData, setRentalData] = useState({
    carId: car._id,
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add the rental to the database
      await axios.post('http://localhost:3001/api/rentals', rentalData);
      // Clear the form after successful submission
      setRentalData({
        carId: car._id,
        startDate: '',
        endDate: '',
      });
    } catch (error) {
      console.error('Error adding rental:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Start Date:</label>
      <input type="date" name="startDate" value={rentalData.startDate} onChange={handleInputChange} required />

      <label>End Date:</label>
      <input type="date" name="endDate" value={rentalData.endDate} onChange={handleInputChange} required />

      {/* Add more form fields as needed */}

      <button type="submit">Rent Now</button>
    </form>
  );
};

export default AddRental;
