// src/components/Authentication/AdminAuthentication/AdminRegistrationPage.js
import React, { useState } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { registerUser } from '../../../services/api';
import './AdminRegistrationPage.css';

function AdminRegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    FullName: '',
    NationalID: '',
    Location: '',
    UserType: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [passwordSuggestions, setPasswordSuggestions] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = () => {
    const { password, confirmPassword } = formData;

    // Password strength requirements
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

    if (!strongRegex.test(password)) {
      setPasswordError(
        'Password must include uppercase, lowercase, numbers, special characters, and be at least 8 characters long'
      );
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
    } else {
      setPasswordError(''); // Clear the error if passwords match
    }

    if (password.length > 0 && password.length < 8) {
      setPasswordSuggestions('Consider a password 8 Characters, or longer for better security.');
    } else {
      setPasswordSuggestions('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validatePassword();

    if (!passwordError) {
      try {
        // Call the API service with the extracted form data
        const response = await registerUser({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          FullName: formData.FullName, // Update to match the expected case
          NationalID: formData.NationalID, // Update to match the expected case
          Location: formData.Location, // Update to match the expected case
          UserType: formData.UserType || 'DefaultUserType', // Default value for userType
        });

        // Handle the response (e.g., display a success message, redirect, etc.)
        console.log('Registration successful:', response);
      } catch (error) {
        // Handle registration errors (e.g., display an error message)
        console.error('Registration error:', error.message);
      }
    }
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
                    {fieldName === 'UserType' ? (
                      <select
                        name="UserType"
                        value={formData.userType}
                        onChange={handleChange}
                      >
                        <option value="">Select User Type</option>
                        <option value="Level 1 Admin">Level 1 Admin</option>
                        <option value="Level 2 Admin">Level 2 Admin</option>
                        <option value="Level 3 Admin">Level 3 Admin</option>
                      </select>
                    ) : fieldName.includes('password') ? (
                      <>
                        <input
                          type="password"
                          name={fieldName}
                          value={formData[fieldName]}
                          onChange={handleChange}
                          onBlur={validatePassword}
                        />
                        {fieldName === 'password' && passwordError && (
                          <p className="error-message">{passwordError}</p>
                        )}
                        {fieldName === 'password' && passwordSuggestions && (
                          <p className="suggestions">{passwordSuggestions}</p>
                        )}
                      </>
                    ) : (
                      <input
                        type={fieldName === 'confirmPassword' ? 'password' : 'text'}
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}
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
