import { all, select, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  SETNEWACCOUNT,
  SAVEACCOUNT,
} from '../actions';


function* saveAccountData({accountData}) {
  yield put({ type: SAVEACCOUNT, accountData });
}

function* runSaveAccountData() {
  yield takeLatest(SETNEWACCOUNT, saveAccountData);
}

export default function* accountSaga() {
  yield all([
    runSaveAccountData(),
  ]);
}