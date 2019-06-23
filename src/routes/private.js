import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store';

const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (store.getState().auth.authenticatedUser ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);

Private.propTypes = {
  component: PropTypes.func.isRequired,
};

export default Private;
