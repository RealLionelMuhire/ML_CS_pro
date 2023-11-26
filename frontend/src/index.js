import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import from "react-dom/client"
import { Provider } from 'react-redux';
import store from './store';
import AppRouter from './components/Router';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
);
