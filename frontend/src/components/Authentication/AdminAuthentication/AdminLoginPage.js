import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import './AdminLoginPage.css';

function AdminLoginPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    // Perform your login logic here
    // Once login is successful, navigate to the dashboard
    navigate('/dashboard'); // Use navigate to change the route
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
                  <label htmlFor="admin_identifier">Email or ID</label><br />
                  <input autoFocus type="text" name="admin[identifier]" id="admin_identifier" />
                </div>
                <div className="field">
                  <label htmlFor="admin_password">Password</label><br />
                  <input type="password" name="admin[password]" id="admin_password" />
                </div>
                <div className="field checkbox-field">
                  <input type="checkbox" name="admin[remember_me]" id="admin_remember_me" />
                  <label htmlFor="admin_remember_me">Remember me</label>
                </div>
                <div className="actions">
                  <button type="button" onClick={handleLogin} className="btn btn-primary">
                    Log in
                  </button>
                </div>
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
