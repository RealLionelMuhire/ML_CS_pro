// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element: Component, adminRequired, ...rest }) => {
  const { isAuthenticated, isAdminAuthenticated } = useAuth();

  // Check for authentication based on route requirements
  const isAuthorized = adminRequired ? isAdminAuthenticated : isAuthenticated;

  return (
    <Route
      {...rest}
      element={isAuthorized ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
