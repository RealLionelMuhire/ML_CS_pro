// src/components/Authentication/AdminAuthentication/AdminLoginPage.js

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser, forgotPassword} from '../../../services/api';
import { loginAction } from '../../../actions/authActions'; 
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';

function AdminLoginPage({ isAuthenticated, loginAction }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin-dashboard');
    }
  }, [isAuthenticated, navigate]);

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
      console.log('Logging in ...');
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });
  
      console.log('Backend response:', response);
  
      if (response.token) {
        // Dispatch the login action with user data
        loginAction(response.user_id);

        // Redirect to the admin dashboard only if not already authenticated
        if (!isAuthenticated) {
          navigate('/admin-dashboard');
        }
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
      navigate('/admin-login', {
        state: { errorMessage: 'Login failed. Please try again.' },
      });
    }
  };
  
  const handleForgotPassword = async () => {
    try {
      // Call the API service for forget password
      console.log('Sending forget password request ...');
      const response = await forgotPassword(formData.email);
      console.log('Forget password response:', response);

      // Handle the response
      if (response.message) {
        // Inform the user that the reset link has been sent to their email
        setError(`Password reset email sent to ${formData.email}`);
      } else {
        setError('Forget password request failed. Please check your email address.');
      }
    } catch (error) {
      console.error('Forget password error:', error);
      setError('Forget password request failed. Please try again.');
    }
  };
  
  return (
    <div className="login-page">
      <Header />
      <main>
        <div className="login-container">
          {isAuthenticated && (
            // Redirecting if authenticated
            navigate('/admin-dashboard')
          )}
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
                  <button type="button" onClick={handleForgotPassword}>
                    Forgot your password?
                  </button>
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
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginPage);