// src/components/Authentication/AdminAuthentication/AdminLoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { loginUser } from '../../services/api'; // Import the API service
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
                {/* ... (unchanged code) ... */}
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
