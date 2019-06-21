import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Routes from './routes';
import store from './store';

import StyledGlobal from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <Routes />
      <ReduxToastr position="top-center" progressBar closeOnToastrClick />
      <StyledGlobal />
    </>
  </Provider>
);

export default App;
