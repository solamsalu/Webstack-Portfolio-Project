// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username, // Use the correct field name
        password,
      });

      const token = response.data.token;

      // Save the token in the local storage
      localStorage.setItem('token', token);

      // Fetch user profile or perform any other actions needed after login
      const userResponse = await axios.get('http://localhost:3001/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Call the onLogin callback with user data
      onLogin(userResponse.data);
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login failure (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
