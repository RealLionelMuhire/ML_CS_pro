import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import './ClientRegistration.css';

function CompanyRegistration() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/CompanyRegistration'); // Use navigate to redirect
  };

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Company Registration</h2> {/* Fix the typo in the title */}
            {/* Add UI elements for user registration */}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" required />
            </div>
            {/* Add more form groups for other fields */}
            {/* ... */}
            <button type="submit">Save</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CompanyRegistration;
