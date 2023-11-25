import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { loginUser } from '../../../services/api';
import { useAuth } from '../../../context/AuthContext';
import './AdminLoginPage.css';

function AdminLoginPage() {
  const navigate = useNavigate();
  const login = useAuth()?.login;
  const isAuthenticated = useAuth()?.isAuthenticated;
  const [formData, setFormData] = useState({
    email: '', // Updated 'identifier' to 'email'
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
    if (!formData.email || !formData.password) {
      setError('Please provide both username/email and password.');
      return;
    }

    setError('');

    try {
      // Call the API service for login with 'email'
      const token = await loginUser({
        email: formData.email, // Updated 'identifier' to 'email'
        password: formData.password,
      });

      localStorage.setItem('userToken', token);
      login();
      navigate('/admin-dashboard');
    } catch (error) {
      setError('Incorrect password. Please try again.');
      navigate('/admin-login', { state: { errorMessage: 'Incorrect password. Please try again.' } });
    }
  };

  if (isAuthenticated) {
    navigate('/admin-dashboard');
  }

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
                    name="email" // Updated 'identifier' to 'email'
                    id="admin_identifier"
                    value={formData.email}
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
