import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  const [collapsedOptions, setCollapsedOptions] = useState({});

  const toggleCollapse = (option) => {
    setCollapsedOptions((prevCollapsedOptions) => ({
      ...prevCollapsedOptions,
      [option]: !prevCollapsedOptions[option],
    }));
  };

  const options = [
    { path: '/find-client', icon: 'search', text: 'Find Client Record' },
    { path: '/active-clients', icon: 'person', text: 'Active Clients' },
    { path: '/appointment-scheduling', icon: 'calendar_today', text: 'Appointment Scheduling' },
    { path: '/register-client', icon: 'person_add', text: 'Register a Client' },
    { path: '/work-on-client-documents', icon: 'description', text: 'Work on Client Documents' },
    { path: '/reports', icon: 'description', text: 'Reports' },
    { path: '/set-schedule', icon: 'schedule', text: 'Set a Schedule' },
    { path: '/data-management', icon: 'storage', text: 'Data Management' },
    { path: '/configure-metadata', icon: 'settings', text: 'Configure Metadata' },
    { path: '/system-administration', icon: 'build', text: 'System Administration' },
    { path: '/messaging', icon: 'message', text: 'Messaging' },
    { path: '/view-logs-activities', icon: 'history', text: 'View Logs and Activities' },
    { path: '/alerts', icon: 'notifications', text: 'Alerts' },
    { path: '/activate-deactivate', icon: 'power_settings_new', text: 'Activate and Deactivate the Client' },
    { path: '/add-review-suggestion', icon: 'rate_review', text: 'Add a Review or Suggestion for the App' },
  ];

  return (
    <div className="dashboard-page">
      <Header />
      <main>
        <div className="container">
          <div className="dashboard">
            {options.map((option) => (
              <Link to={option.path} key={option.path}>
                <div
                  className={`option ${collapsedOptions[option.path] ? 'collapsed' : ''}`}
                  onClick={() => toggleCollapse(option.path)}
                >
                  <i className="material-icons">{option.icon}</i>
                  <br />
                  {!collapsedOptions[option.path] && option.text}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboardPage;
