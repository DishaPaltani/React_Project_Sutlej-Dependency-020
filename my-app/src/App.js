// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {isLoggedIn ? (
        <Dashboard user={user} />
      ) : (
        <>
          <Login handleLogin={handleLogin} />
          <Signup handleLogin={handleLogin} />
        </>
      )}
    </div>
  );
};

export default App;
