import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../client/components/App.jsx';
import Layout from '../client/components/Layout.jsx';
import Homepage from '../client/components/Homepage/Homepage.jsx';
import AdminDashboard from '../client/components/AdminDashboard/AdminDashboard.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="/admin/dashboard" component={AdminDashboard} />
  </Route>
);
