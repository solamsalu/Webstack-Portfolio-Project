// components/DeleteUser.js
import React from 'react';
import axios from 'axios';

const DeleteUser = ({ user, onDelete }) => {
  const handleDelete = () => {
    // Make a DELETE request to delete the user
    axios.delete(`http://localhost:3001/api/users/${user._id}`)
      .then(response => {
        console.log('User deleted successfully:', response.data);
        onDelete(user._id); // Pass the deleted user's ID to the onDelete callback
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div>
      <p>{user.username} - {user.email}</p>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
