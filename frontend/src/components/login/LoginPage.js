// LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';
import Dashboard from '../customerDashboard/Dashboard'; 

const LoginPage = () => {
   const [authenticated, setAuthenticated] = useState(false);
   const [user, setUser] = useState(null);

  // Function to set the user after successful login
  const handleLogin = (userData) => {
    setUser(userData);
    setAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
    setAuthenticated(false);
    // Additional logic for clearing tokens, etc.
  };

  return (
    <div className="app">
      {user ? (
        // If user is authenticated, show Dashboard
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        // If user is not authenticated, show LoginForm
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
