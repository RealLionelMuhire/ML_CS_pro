import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ClientLoginPage from './Authentication/ClientAuthentication/ClientLoginPage';
import ClientRegistrationPage from './Authentication/ClientAuthentication/ClientRegistrationPage';
import AdminLoginPage from './Authentication/AdminAuthentication/AdminLoginPage';
import AdminRegistrationPage from './Authentication/AdminAuthentication/AdminRegistrationPage';
import AdminDashboardPage from './AdminAccounts/AdminDashboardPage';
import ClientDashboardPage from './ClientAccounts/ClientDashboardPage';
import ClientAcceptanceForm1 from './ClientAccounts/ClientForms/ClientForm1/ClientAcceptanceForm1';
import ClientList from './ClientData/ClientList';
import FindClientComponent from './AdminAccounts/FindClientComponent';
import ActiveClientsComponent from './AdminAccounts/ActiveClientsComponent';
import AppointmentSchedulingComponent from './AdminAccounts/AppointmentSchedulingComponent';
import RegisterClientComponent from './AdminAccounts/RegisterClientComponent';
import ProtectedRoute from './components/ProtectedRoute';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/client-login" element={<ClientLoginPage />} />
      <Route path="/client-registration" element={<ClientRegistrationPage />} />
      <Route path="/client-dashboard" element={<ClientDashboardPage/>} />
      <Route path="/client-acceptance-form" element={<ClientAcceptanceForm1 />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/admin-registration" element={<AdminRegistrationPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      <Route path="/client-list" component={ClientList} />
      <Route path="/find-client" element={<FindClientComponent />} />
      <Route path="/active-clients" element={<ActiveClientsComponent />} />
      <Route path="/appointment-scheduling" element={<AppointmentSchedulingComponent />} />
      <Route path="/register-client" element={<RegisterClientComponent />} />
      {/* Add routes for other icons */}
    </Routes>
  );
}

export default AppRouter;
