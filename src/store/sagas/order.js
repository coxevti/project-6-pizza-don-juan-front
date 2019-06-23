import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import OrderAction from '~/store/ducks/order';

export function* allOrders() {
  const response = yield call(api.get, 'orders');
  yield put(OrderAction.allOrdersSuccess(response.data));
}
