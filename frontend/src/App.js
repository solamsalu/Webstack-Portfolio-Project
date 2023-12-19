// src/App.js
import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  return (
    <div>
      <h1>Your Car Rental Company</h1>
      <UserList />
      <AddUser />
    </div>
  );
}

export default App;

