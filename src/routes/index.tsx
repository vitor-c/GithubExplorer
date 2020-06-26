import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import Repository from '../Repository/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
