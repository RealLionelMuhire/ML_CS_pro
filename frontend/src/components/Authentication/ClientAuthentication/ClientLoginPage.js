import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import './ClientLoginPage.css';

function ClientLoginPage() {
  return (
    <div className="login-page">
      <Header />
      <main>
        <div className="login-container">
          <article className="client-login">
            <div className="login-form">
              <h2 className="logo">WELCOME TO ML CORPORATE SERVICES</h2>
              <form id="new_user" action="/auth/sign_in" method="post">
                <div className="field">
                  <label htmlFor="user_email">Email</label><br />
                  <input autoFocus type="text" name="user[email]" id="user_email" />
                </div>
                <div className="field">
                  <label htmlFor="user_password">Password</label><br />
                  <input type="password" name="user[password]" id="user_password" />
                </div>
                <div className="field checkbox-field">
                  <input type="checkbox" name="user[remember_me]" id="user_remember_me" />
                  <label htmlFor="user_remember_me">Remember me</label>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ClientLoginPage;