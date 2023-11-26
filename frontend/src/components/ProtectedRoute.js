// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  // const { isAuthenticated, isAdminAuthenticated } = useAuth();

  // Check for authentication based on route requirements
  // const isAuthorized = adminRequired ? isAdminAuthenticated : isAuthenticated;
  const isAuthorized = useAuth()?.isAuthenticated;

  return isAuthorized ? <Outlet/> : <Navigate to="/admin-dashboard" />
};

export default ProtectedRoute;
