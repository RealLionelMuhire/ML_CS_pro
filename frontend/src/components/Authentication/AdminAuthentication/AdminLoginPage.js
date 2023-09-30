// src/components/Authentication/AdminAuthentication/AdminLoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import './AdminLoginPage.css';

function AdminLoginPage() {
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
                  <input type="submit" name="commit" value="Log in" className="btn btn-primary" />
                </div>
              </form>

              <ul id="devise_links">
                <li>
                  <a href="/auth/password/new">Forgot your password?</a>
                </li>
              </ul>
            </div>
          </article>
          {/* Link to login as administrator */}
          <div className="admin-login-link">
            <Link to="/admin-registration">Register as Administrator</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default AdminLoginPage;
