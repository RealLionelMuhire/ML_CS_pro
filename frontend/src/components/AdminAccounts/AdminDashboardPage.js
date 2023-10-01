import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  return (
    <div className="dashboard-page">
      <Header />
      <main>
        <div className="container">
          <div className="dashboard">
            <div className="option">
              <i className="fa fa-search"></i>
              <br />Find Client Record
            </div>
            <div className="option">
              <i className="fa fa-user"></i>
              <br />Active Clients
            </div>
            <div className="option">
              <i className="fa fa-calendar"></i>
              <br />Appointment Scheduling
            </div>
            <div className="option">
              <i className="fa fa-user-plus"></i>
              <br />Register a Client
            </div>
            <div className="option">
              <i className="fa fa-heartbeat"></i>
              <br />Capture Vitals
            </div>
            <div className="option">
              <i className="fa fa-file-text"></i>
              <br />Reports
            </div>
            <div className="option">
              <i className="fa fa-medkit"></i>
              <br />Dispense Medication
            </div>
            <div className="option">
              <i className="fa fa-database"></i>
              <br />Data Management
            </div>
            <div className="option">
              <i className="fa fa-cogs"></i>
              <br />Configure Metadata
            </div>
            <div className="option">
              <i className="fa fa-wrench"></i>
              <br />System Administration
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboardPage;
