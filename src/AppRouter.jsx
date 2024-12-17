import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './sign-in/SignIn'; // Assuming Login component exists
import Dashboard from './dashboard/Dashboard'; // Assuming Dashboard component exists

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
