// src/components/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './Common/Header';
import Footer from './Common/Footer';
import './HomePage.css'; // Import your custom CSS for styling

function HomePage() {
  // Use state to track whether the user has an account
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="container">
          {/* Header asking if the user has an account */}
          <div className="account-header">
            <h2>Do you have an account?</h2>
            <div className="account-buttons">
              {/* Button for "Yes" */}
              <button className="btn btn-primary" onClick={() => setHasAccount(true)}>
                Yes
              </button>
              {/* Button for "No" */}
              <button className="btn btn-secondary" onClick={() => setHasAccount(false)}>
                No
              </button>
            </div>
          </div>

          {/* Conditional rendering based on whether the user has an account */}
          {hasAccount ? (
            // Displayed when the user has an account
            <div className="client-login">
              <h2>Welcome Back</h2>
              {/* Link to the ClientLoginPage component */}
              <Link to="/client-login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          ) : (
            // Displayed when the user does not have an account
            <div className="client-registration">
              <h2>Welcome to ML CORPORATE SERVICES</h2>
              {/* Link to the ClientRegistrationPage component */}
              <Link to="/client-registration">
                <button className="btn btn-secondary">Register</button>
              </Link>
            </div>
          )}

          {/* Link to login as administrator */}
          <div className="admin-login-link">
            <Link to="/admin-login">Login as Administrator</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
