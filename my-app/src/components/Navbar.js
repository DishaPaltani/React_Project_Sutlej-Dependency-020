
import React from 'react';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav>
      <h2>Authentication App</h2>
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
