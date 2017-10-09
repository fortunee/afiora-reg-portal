import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../client/components/App.jsx';
import Home from '../client/components/Homepage/Homepage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
