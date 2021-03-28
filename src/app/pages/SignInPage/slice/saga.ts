import { PayloadAction } from '@reduxjs/toolkit';
import { SigninActionPayload } from './types';
import { call, put, takeLatest } from 'redux-saga/effects';
import apiCall from 'app/api/apiCall';
import routes from 'app/api/routes';
import { actions as appMessageActions } from 'app/pages/AppMessages/slice';

import { signinActions } from './';
import { setToken } from 'app/services/token';
import { getErrorMessage } from 'utils/functions';

function* initSigninSaga(data: PayloadAction<SigninActionPayload>) {
  try {
    const response = yield call(apiCall, {
      method: 'POST',
      route: routes.user.signIn,
      isSecureRoute: false,
      body: data.payload,
    });
    if (response.token) {
      yield call(setToken, response.token);
      yield call(appMessageActions.setRedirectTo, '/');
    }
  } catch (error) {
    yield put(
      appMessageActions.setAppAlert({
        message: getErrorMessage(error),
        severity: 'error',
        autoHideIn: 4000,
      }),
    );
  }
  yield put(signinActions.setLoggingIn(false));
}
export function* signinSaga() {
  yield takeLatest(signinActions.signInAction.type, initSigninSaga);
}
