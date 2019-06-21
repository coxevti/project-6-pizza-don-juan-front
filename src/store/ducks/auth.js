import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['token', 'user'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  authenticatedUser: !!localStorage.getItem('@pizzariaDonJuan:token'),
  token: localStorage.getItem('@pizzariaDonJuan:token') || null,
  user: JSON.parse(localStorage.getItem('@pizzariaDonJuan:user')) || null,
});

/* Reducers */

export const loginSuccess = (state, { token, user }) => state.merge({
  token,
  user,
  authenticatedUser: true,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
});
