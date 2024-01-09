import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddRental = ({ car }) => {
  const [rentalData, setRentalData] = useState({
    userId: '', // Will be set based on authentication
    carId: car._id,
    startDate: '',
    endDate: '',
  });

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users/profile', {
          headers: {
            Authorization: localStorage.getItem('token'), // Assuming you store the token in localStorage
          },
        });
        setRentalData(prevData => ({ ...prevData, userId: response.data._id }));
        setAuthenticated(true);
      } catch (error) {
        console.error('User not authenticated:', error);
        setAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add the rental to the database
      await axios.post('http://localhost:3001/api/rentals', rentalData);
      // Clear the form after successful submission
      setRentalData({
        userId: '',
        carId: car._id,
        startDate: '',
        endDate: '',
      });
    } catch (error) {
      console.error('Error adding rental:', error);
    }
  };

  if (!authenticated) {
    return <p>Please log in or sign up to rent this car.</p>;
  }

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
