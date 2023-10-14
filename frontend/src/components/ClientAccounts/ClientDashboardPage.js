import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link, useNavigate } from 'react-router-dom';
import './ClientDashboardPage.css';

function ClientDashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-page">
      <Header />
      <main>
        <div className="container">
          <div className="dashboard">
            <Link to="/view-activity-history">
              <div className="option">
                <i className="material-icons">history</i>
                <br />View Activity History
              </div>
            </Link>
            <Link to="/view-appointments">
              <div className="option">
                <i className="material-icons">event</i>
                <br />View Available Period and Schedule Appointments
              </div>
            </Link>
            <Link to="/in-app-messages">
              <div className="option">
                <i className="material-icons">message</i>
                <br />In-App Messages (Contact Administrator)
              </div>
            </Link>
            <Link to="/request-meeting">
              <div className="option">
                <i className="material-icons">videocam</i>
                <br />Request for Video Calls or Physical Meetings
              </div>
            </Link>
            <Link to="/shared-calendar">
              <div className="option">
                <i className="material-icons">event_available</i>
                <br />View Activities on a Shared Calendar
              </div>
            </Link>
            <Link to="/view-document-activity">
              <div className="option">
                <i className="material-icons">description</i>
                <br />View Activities on Your Documents
              </div>
            </Link>
            <Link to="/view-alerts">
              <div className="option">
                <i className="material-icons">notifications</i>
                <br />View Alerts
              </div>
            </Link>
            <Link to="/request-service">
              <div className="option">
                <i className="material-icons">add_shopping_cart</i>
                <br />Request a Service
              </div>
            </Link>
            <Link to="/add-review-suggestion">
              <div className="option">
                <i className="material-icons">rate_review</i>
                <br />Add a Review or Suggestion for Further Improvement
              </div>
            </Link>
          </div>
        </div>
      </main>
      <div className="dashboard-actions">
      <button onClick={() => navigate('/client-acceptance-form')}>Add More Information of Your Company</button>
        <button>Fill the KYC Form</button>
      </div>
      <Footer />
    </div>
  );
}

export default ClientDashboardPage;
