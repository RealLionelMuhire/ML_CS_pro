import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="https://mlcorporateservices.com//home">
          ML Corporate Services
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Registration Desk
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                User
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
