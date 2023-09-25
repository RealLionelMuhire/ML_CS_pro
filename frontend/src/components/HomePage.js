// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './Common/Header';
import Footer from './Common/Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header /> {/* Include the Header component */}
      <main>
        <section className="hero">
          <h2>Welcome</h2>
        </section>
        

        <section className="login-section">
          <div className="client-login">
            <h2>Login or Signup as a New Client</h2>
            <Link to="/client-login">
              <button className="btn btn-primary">Client Login</button>
            </Link>
            <Link to="/client-signup">
              <button className="btn btn-secondary">Client Signup</button>
            </Link>
          </div>
          <div className="admin-login">
            <h2>Login as an Administrator</h2>
            <Link to="/admin-login">
              <button className="btn btn-info">Admin Login</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default HomePage;
