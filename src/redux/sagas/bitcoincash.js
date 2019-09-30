import { put, takeEvery } from 'redux-saga/effects';
import {
  BITCOINCASH_URL_RESULT,
  SAVE_BITCOIN_CASH,
} from '../constants';

function* saveBitcoinCash({ payload: bitcoincashURL }) {
  try {
    yield put({ type: BITCOINCASH_URL_RESULT, payload: bitcoincashURL });
  } catch (err) {
    yield put({ type: BITCOINCASH_URL_RESULT, payload: null });
  }
}

export function* bitcoinCash() {
  yield [
    takeEvery(SAVE_BITCOIN_CASH, saveBitcoinCash),
  ];
}
