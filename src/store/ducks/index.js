import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as auth } from '~/store/ducks/auth';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as order } from '~/store/ducks/order';

export default history => combineReducers({
  auth,
  toastr,
  order,
  router: connectRouter(history),
});
