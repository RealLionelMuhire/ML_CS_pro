// src/Router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove import of BrowserRouter
import App from '../App';
import HomePage from './HomePage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<App />} />
      {/* Add more routes for other components/pages */}
    </Routes>
  );
}

export default AppRouter;
