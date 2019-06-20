import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';
import AuthActions from '~/store/ducks/auth';

export function* login({ email, password }) {
  try {
    const { data } = yield call(api.post, 'login', { email, password });
    if (data.user.role !== 'admin') {
      yield put(
        toastrActions.add({
          type: 'error',
          title: 'Acesso não autorizado',
          message: 'Login permitido somente no mobile, logar-se no app.',
        }),
      );
      return;
    }
    localStorage.setItem('@pizzariaDonJuan:token', data.token);
    localStorage.setItem('@pizzariaDonJuan:user', JSON.stringify(data.user));
    yield put(AuthActions.loginSuccess(data.token, data.user));
    yield put(push('/'));
  } catch (error) {
    const { statusText, data } = error.response;
    yield put(
      toastrActions.add({
        type: 'error',
        title: statusText,
        message: data.message,
      }),
    );
  }
}
