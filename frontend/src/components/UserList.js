// components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteUser from './DeleteUser';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch all users
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleDeleteUser = (deletedUserId) => {
    // Remove the deleted user from the user list
    setUsers(prevUsers => prevUsers.filter(user => user._id !== deletedUserId));
  };

  return (
  <div>
    <h2>User List</h2>
    {users.map(user => (
      <div key={user._id}>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <DeleteUser user={user} onDelete={handleDeleteUser} />
      </div>
    ))}
  </div>
);
};

export default UserList;
