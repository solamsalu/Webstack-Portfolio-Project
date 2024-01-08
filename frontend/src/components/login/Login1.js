// // Login.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Auth.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Add your login logic here
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login Page</h2>
//       <form>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>

//       <p>
//         Don't have an account? <Link to="/signup">Signup</Link>
//       </p>
//       <p>
//         <Link to="/dashboard">Go to Dashboard</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import the corresponding CSS file

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login functionality and check if the user is in the user list in the backend
    // For simplicity, I'll assume a static user list here
    const userList = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
      // Add more users as needed
    ];

    const user = userList.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (user) {
      // Redirect to RentalForm after successful login
      navigate('/rental-form');
    } else {
      // Handle incorrect login credentials (show an error message, redirect to login, etc.)
      console.log('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


