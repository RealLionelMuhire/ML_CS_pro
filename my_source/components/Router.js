// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/app" component={App} />
        {/* Add more routes for other components/pages */}
      </Switch>
    </Router>
  );
}

export default AppRouter;

