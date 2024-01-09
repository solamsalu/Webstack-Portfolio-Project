// CustomerDashboard.js

import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>

      {/* Add more dashboard features or information here */}

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
