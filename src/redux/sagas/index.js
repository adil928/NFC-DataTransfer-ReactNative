import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { bitcoinCash } from './bitcoincash';

export default function* rootSaga() {
  yield all([
    authSaga(),
    bitcoinCash(),
  ]);
}
