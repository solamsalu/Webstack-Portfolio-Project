// LoginSignup.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginSignup.css'; // Import the corresponding CSS file

const LoginSignup = () => {
  const [signupData, setSignupData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = () => {
    // Implement signup functionality and add user to the user list in the backend
    console.log('Signup:', signupData);
    // Redirect to RentalForm after successful signup
    navigate('/rental-form');
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-form">
        <h2>Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
        />
        <button onClick={handleSignup}>Signup</button>

        {/* <p>
          Already have an account? <Link to="/login-signup">Login</Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginSignup;