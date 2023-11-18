// src/components/Authentication/AdminAuthentication/AdminLoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { loginUser } from '../../../services/api';
import './AdminLoginPage.css';

function AdminLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleLogin = async () => {
    // Check if the identifier and password are provided
    if (!formData.identifier || !formData.password) {
      setError('Please provide both username/email and password.');
      return;
    }

    // Clear previous errors
    setError('');

    try {
      // Call the API service for login
      const token = await loginUser({
        identifier: formData.identifier,
        password: formData.password,
      });

      // Store the user token in local storage or a cookie
      localStorage.setItem('userToken', token);

      // Simulate a successful login for demonstration purposes
      navigate('/admin-dashboard');
    } catch (error) {
      // Handle login errors (e.g., display an error message)
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <Header />
      <main>
        <div className="login-container">
          <article className="client-login">
            <div className="login-form">
              <h2 className="logo">WELCOME TO ML CORPORATE SERVICES</h2>
              <p>For administrators only</p>
              <form id="admin_login_form" action="/auth/admin_sign_in" method="post">
                <div className="field">
                  <label htmlFor="admin_identifier">Username or Email</label><br />
                  <input
                    autoFocus
                    type="text"
                    name="identifier"
                    id="admin_identifier"
                    value={formData.identifier}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="admin_password">Password</label><br />
                  <input
                    type="password"
                    name="password"
                    id="admin_password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Additional fields can be added if needed */}
                <div className="field checkbox-field">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="admin_remember_me"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="admin_remember_me">Remember me</label>
                </div>
                <div className="actions">
                  <button type="button" onClick={handleLogin} className="btn btn-primary">
                    Log in
                  </button>
                </div>
                {error && <p className="error-message">{error}</p>}
              </form>

              <ul id="devise_links">
                <li>
                  <a href="/auth/password/new">Forgot your password?</a>
                </li>
                <li>
                  <Link to="/admin-registration">Register as Administrator</Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminLoginPage;
