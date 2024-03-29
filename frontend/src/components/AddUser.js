import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css'

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Make a POST request to add a new user
    axios.post('http://localhost:3001/api/users/create', { username, password, email })
      .then(response => {
        console.log('User added successfully:', response.data);
        setUsername('');
        setPassword('');
        setEmail('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

//  return (
  //   <div>
  //     <h1>Add User</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
  //       <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
  //       <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
  //       <button type="submit">Add User</button>
  //     </form>
  //   </div>
  // );
//};

return (
  <div className="add-user-container">
    <h1>Add User</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
      <label htmlFor="password">Password: <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <label htmlFor="email">Email: <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <button type="submit" className="add-user-btn">Add User</button>
    </form>
  </div>
);
};

export default AddUser;
