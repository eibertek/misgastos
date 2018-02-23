import { all, put, takeLatest } from 'redux-saga/effects'

function* saveData({ country, currency, dolar }) {
  yield put({ type: 'SAVE_DATA', country, currency, dolar });
}

function* saveFirstTime() {
  console.log(action);
  yield takeLatest('SET_FIRST_TIME_COUNTRY_CURRENCY', saveData);
}


export default function* rootSaga() {
  yield all([
    saveFirstTime(),
  ]);
}