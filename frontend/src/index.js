// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
  <Router> {/* Wrap the App component with BrowserRouter */}
    <App />
  </Router>,
  document.getElementById('root')
);
