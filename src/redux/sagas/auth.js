import { put, call, takeEvery } from 'redux-saga/effects';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../constants';

function* loginUser() {
  console.log('called')
  // try {
  //   const response = yield call(listAdminsAPI);
  //   yield put({ type: LOGIN_USER_SUCCESS, payload: response.data });
  // } catch (err) {
  //   yield put({ type: LOGIN_USER_FAILURE, payload: err });
  // }
}

export function* authSaga() {
  yield [
    takeEvery(LOGIN_USER_REQUEST, loginUser),
  ];
}
