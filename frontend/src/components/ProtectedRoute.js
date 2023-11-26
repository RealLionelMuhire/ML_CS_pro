// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const isAuthenticated = useAuth().isAuthenticated;

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin-dashboard" />;
};

export default ProtectedRoute;
