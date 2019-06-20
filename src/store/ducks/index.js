import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as auth } from '~/store/ducks/auth';
import { reducer as toastr } from 'react-redux-toastr';

export default history => combineReducers({
  auth,
  toastr,
  router: connectRouter(history),
});
