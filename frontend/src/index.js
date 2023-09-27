// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the top-level Router
import AppRouter from './components/Router'; // Import your Router component

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Use the top-level Router here */}
      <AppRouter /> {/* Render your Router component */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
