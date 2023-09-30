// src/components/Authentication/AdminAuthentication/AdminRegistrationPage.js
import React, { useState } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import './AdminRegistrationPage.css';

function AdminRegistrationPage() {
  const [section, setSection] = useState('');

  // Define the sections and their corresponding fields
  const sections = {
    'Personal Information': [
      'Full Name (First, Middle, Last)',
      'Date of Birth',
      'Gender',
      'Social Security Number (or equivalent, depending on location)',
      'Marital Status',
    ],
    'Contact Information': [
      'Home Address',
      'Phone Number (Mobile and/or Home)',
      'Email Address',
    ],
    // Define other sections and fields here
  };

  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
  };

  return (
    <div className="registration-page">
      <Header />
      <main>
        <div className="container">
          <article className="admin-registration">
            <div className="registration-form">
              <h2 className="logo">WELCOME TO ML CORPORATE SERVICES</h2>
              <form id="admin_registration_form" action="/auth/sign_up" method="post">
                {/* Dropdown to select section */}
                <div className="field">
                  <label htmlFor="section">Select Section:</label><br />
                  <select
                    name="section"
                    id="section"
                    onChange={(e) => handleSectionChange(e.target.value)}
                  >
                    <option value="">Select a Section</option>
                    {Object.keys(sections).map((sectionName) => (
                      <option key={sectionName} value={sectionName}>
                        {sectionName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Conditional rendering of fields based on selected section */}
                {section && (
                  <div className="field">
                    <label>{section}</label><br />
                    {sections[section].map((placeholder) => (
                      <input
                        key={placeholder}
                        type="text"
                        name={`user[${placeholder}]`}
                        placeholder={placeholder}
                      />
                    ))}
                  </div>
                )}

                {/* Field for attaching PDF files */}
                <div className="field">
                  <label htmlFor="pdfFile">Attach PDF File:</label><br />
                  <input type="file" id="pdfFile" name="pdfFile" accept=".pdf" />
                </div>

                <div className="actions">
                  <input type="submit" name="commit" value="Register" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminRegistrationPage;
