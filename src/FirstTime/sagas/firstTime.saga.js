import { all, put, takeLatest } from 'redux-saga/effects'

function* saveData({ country, currency, dolar }) {
  yield put({ type: 'SAVE_DATA', country, currency, dolar });
}

function* saveFirstTime() {
  yield takeLatest('SET_FIRST_TIME_COUNTRY', saveData);
}


export default function* rootSaga() {
  yield all([
    saveFirstTime(),
  ]);
}