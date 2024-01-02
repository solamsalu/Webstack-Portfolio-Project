// DeleteRental.js
import React from 'react';
import axios from 'axios';

const DeleteRental = ({ rental, onDelete }) => {
   const handleDelete = () => {
      // Make a DELETE request to delete the rental
      axios.delete(`http://localhost:3001/api/rentals/${rental._id}`)
         .then(response => {
            console.log('Rental deleted successfully:', response.data);
            onDelete(); // Invoke the onDelete callback to update the rental list
         })
         .catch(error => {
            console.error('Error deleting rental:', error);
         });
   };

   return (
      <div>
         <p>Rental ID: {rental._id} - Start Date: {rental.startDate} - End Date: {rental.endDate}</p>
         <button onClick={handleDelete}>Delete Rental</button>
      </div>
   );
};

export default DeleteRental;
