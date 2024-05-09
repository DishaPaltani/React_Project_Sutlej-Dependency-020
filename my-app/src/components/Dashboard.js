
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <p>This is the dashboard. You are logged in!</p>
    </div>
  );
};

export default Dashboard;
