import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>Username:</strong> {user.username} | <strong>Email:</strong> {user.email}
          </li>
        ))}
        {/* Display other user details as needed */}
      </ul>
    </div>
  );
};

export default Users;
