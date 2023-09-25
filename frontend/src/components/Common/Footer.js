import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} ML Corporate Services</p>
      </div>
    </footer>
  );
}

export default Footer;
