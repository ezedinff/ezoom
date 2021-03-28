import { PayloadAction } from '@reduxjs/toolkit';
import apiCall from 'app/api/apiCall';
import routes from 'app/api/routes';
import { SigninActionPayload } from 'app/pages/SignInPage/slice/types';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { signupActions as actions } from '.';
import { actions as appMessageActions } from 'app/pages/AppMessages/slice';
import { getErrorMessage } from 'utils/functions';

function* initSignUp(data: PayloadAction<SigninActionPayload>) {
  try {
    const response = yield call(apiCall, {
      isSecureRoute: false,
      route: routes.user.signUp,
      method: 'POST',
      body: data.payload,
    });
    if (response.status === 200) {
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
  yield put(actions.setLoading(false));
}

export function* signupSaga() {
  yield takeLatest(actions.signUpAction.type, initSignUp);
}
