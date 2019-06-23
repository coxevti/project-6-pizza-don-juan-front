import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { login, logout } from '~/store/sagas/auth';

import { OrderTypes } from '~/store/ducks/order';
import { allOrders } from '~/store/sagas/order';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(OrderTypes.ALL_ORDERS_REQUEST, allOrders),
  ]);
}
