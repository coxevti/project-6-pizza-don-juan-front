import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import StyledGlobal from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <Routes />
      <StyledGlobal />
    </>
  </Provider>
);

export default App;
