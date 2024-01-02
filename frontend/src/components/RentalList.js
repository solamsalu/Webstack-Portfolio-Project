// RentalList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteRental from './DeleteRental';

const RentalList = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch all rentals
    axios.get('http://localhost:3001/api/rentals')
      .then(response => {
        setRentals(response.data);
      })
      .catch(error => {
        console.error('Error fetching rentals:', error);
      });
  }, []);

  const handleDeleteRental = (deletedRentalId) => {
    // Remove the deleted rental from the rental list
    setRentals(prevRentals => prevRentals.filter(rental => rental._id !== deletedRentalId));
  };

  return (
    <div>
      <h2>Rental List</h2>
      {rentals.map(rental => (
        <DeleteRental key={rental._id} rental={rental} onDelete={handleDeleteRental} />
      ))}
    </div>
  );
};

export default RentalList;
