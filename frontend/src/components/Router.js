import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ClientLoginPage from './Authentication/ClientAuthentication/ClientLoginPage';
import ClientRegistrationPage from './Authentication/ClientAuthentication/ClientRegistrationPage';
import AdminLoginPage from './Authentication/AdminAuthentication/AdminLoginPage';
import AdminRegistrationPage from './Authentication/AdminAuthentication/AdminRegistrationPage';
import AdminDashboardPage from './AdminAccounts/AdminDashboardPage';

// Import your other components for the routes here
// For example:
import FindClientComponent from './AdminAccounts/FindClientComponent';
import ActiveClientsComponent from './AdminAccounts/ActiveClientsComponent';
import AppointmentSchedulingComponent from './AdminAccounts/AppointmentSchedulingComponent';
import RegisterClientComponent from './AdminAccounts/RegisterClientComponent';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/client-login" element={<ClientLoginPage />} />
      <Route path="/client-registration" element={<ClientRegistrationPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/admin-registration" element={<AdminRegistrationPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      {/* Add routes for other icons */}
      <Route path="/find-client" element={<FindClientComponent />} />
      <Route path="/active-clients" element={<ActiveClientsComponent />} />
      <Route path="/appointment-scheduling" element={<AppointmentSchedulingComponent />} />
      <Route path="/register-client" element={<RegisterClientComponent />} />
      {/* Add routes for other icons */}
    </Routes>
  );
}

export default AppRouter;
