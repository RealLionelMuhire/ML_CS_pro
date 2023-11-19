import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  const navigate = useNavigate();

  const navigateToClientList = () => {
    navigate('../ClientData/ClientList');
  };

  return (
    <div className="dashboard-page">
      <Header />
      <main>
        <div className="container">
          <div className="dashboard">
            <Link to="/find-client">
              <div className="option">
                <i className="material-icons">search</i>
                <br />Find Client Record
              </div>
            </Link>
            <Link to="/active-clients">
              <div className="option">
                <i className="material-icons">person</i>
                <br />Active Clients
              </div>
            </Link>
            <Link to="/appointment-scheduling">
              <div className="option">
                <i className="material-icons">calendar_today</i>
                <br />Appointment Scheduling
              </div>
            </Link>
            <Link to="/register-client">
              <div className="option">
                <i className="material-icons">person_add</i>
                <br />Register a Client
              </div>
            </Link>
            <Link to="/work-on-client-documents">
              <div className="option">
                <i className="material-icons">description</i>
                <br />Work on Client Documents
              </div>
            </Link>
            <Link to="/reports">
              <div className="option">
                <i className="material-icons">description</i>
                <br />Reports
              </div>
            </Link>
            <Link to="/set-schedule">
              <div className="option">
                <i className="material-icons">schedule</i>
                <br />Set a Schedule
              </div>
            </Link>
            <Link to="/data-management">
              <div className="option">
                <i className="material-icons">storage</i>
                <br />Data Management
              </div>
            </Link>
            <Link to="/configure-metadata">
              <div className="option">
                <i className="material-icons">settings</i>
                <br />Configure Metadata
              </div>
            </Link>
            <Link to="/system-administration">
              <div className="option">
                <i className="material-icons">build</i>
                <br />System Administration
              </div>
            </Link>
            <Link to="/messaging">
              <div className="option">
                <i className="material-icons">message</i>
                <br />Messaging
              </div>
            </Link>
            <Link to="/view-logs-activities">
              <div className="option">
                <i className="material-icons">history</i>
                <br />View Logs and Activities
              </div>
            </Link>
            {/* New Options and Icons */}
            <Link to="/alerts">
              <div className="option">
                <i className="material-icons">notifications</i>
                <br />Alerts
              </div>
            </Link>
            <Link to="/activate-deactivate">
              <div className="option">
                <i className="material-icons">power_settings_new</i>
                <br />Activate and Deactivate the Client
              </div>
            </Link>
            <Link to="/add-review-suggestion">
              <div className="option">
                <i className="material-icons">rate_review</i>
                <br />Add a Review or Suggestion for the App
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboardPage;
