import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Function to handle login
  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wine.com</h1>
        {isLoggedIn ? (
          <Dashboard user={user} onLogout={handleLogout} />
        ) : (
          <>
            <Login onLogin={handleLogin} />
            <Signup />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
