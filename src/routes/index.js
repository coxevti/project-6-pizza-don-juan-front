import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from '~/routes/history';

import Private from '~/routes/private';
import Guest from '~/routes/guest';

import Main from '~/pages/Main';
import Login from '~/pages/Auth/Login';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Private path="/" exact component={Main} />
      <Guest path="/login" component={Login} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
