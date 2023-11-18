// src/components/Authentication/AdminAuthentication/AdminRegistrationPage.js
import React, { useState } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import './AdminRegistrationPage.css';

function AdminRegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    fullName: '',
    nationalID: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    console.log(formData);
  };

  return (
    <div className="registration-page">
      <Header />
      <main>
        <div className="container">
          <article className="admin-registration">
            <div className="registration-form">
              <h2 className="logo">WELCOME TO ML CORPORATE SERVICES</h2>
              <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((fieldName) => (
                  <div key={fieldName} className="field">
                    <label htmlFor={fieldName}>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:</label><br />
                    {fieldName.includes('password') ? (
                      <input
                        type="password"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type="text"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}

                {/* Field for attaching PDF files */}
                <div className="field">
                  <label htmlFor="pdfFile">Attach PDF File:</label><br />
                  <input type="file" id="pdfFile" name="pdfFile" accept=".pdf" />
                </div>

                <div className="actions">
                  <input type="submit" value="Register" className="btn btn-primary" />
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
