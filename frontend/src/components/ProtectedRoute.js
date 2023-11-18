// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/admin-login" replace />}
    />
  );
};

export default ProtectedRoute;
