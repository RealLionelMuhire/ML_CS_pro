// src/components/Router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ClientLoginPage from './Authentication/ClientAuthentication/ClientLoginPage';
import ClientRegistrationPage from './Authentication/ClientAuthentication/ClientRegistrationPage';
import AdminLoginPage from './Authentication/AdminAuthentication/AdminLoginPage';
import AdminRegistrationPage from './Authentication/AdminAuthentication/AdminRegistrationPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/client-login" element={<ClientLoginPage />} />
      <Route path="/client-registration" element={<ClientRegistrationPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/admin-registration" element={<AdminRegistrationPage />} />
      {/* Other routes */}
    </Routes>
  );
}

export default AppRouter;
