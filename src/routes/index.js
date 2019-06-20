import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '~/pages/Main';
import Login from '~/pages/Auth/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
