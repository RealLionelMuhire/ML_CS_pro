// src/components/HomePage.js
import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header /> {/* Include the Header component */}
      <main>
        <section className="hero">
          <h1>Welcome to ML Corporate Services</h1>
          <p>Your trusted partner in client management and more.</p>
        </section>
        <section className="features">
          <div className="feature">
            <h2>Client Data Management</h2>
            <p>Centralized repository for client data.</p>
          </div>
          <div className="feature">
            <h2>Admission Process</h2>
            <p>Streamlined client admission process.</p>
          </div>
          {/* Add more feature sections as needed */}
        </section>
      </main>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default HomePage;
