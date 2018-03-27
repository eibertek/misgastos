import { all, select, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  SETNEWCURRENCY,
  SAVECURRENCY,
} from '../actions';


function* saveCurrencyData({currencyData}) {
  yield put({ type: SAVECURRENCY, currencyData });
}

function* runSaveCurrencyData() {
  yield takeLatest(SETNEWCURRENCY, saveCurrencyData);
}

export default function* currencySaga() {
  yield all([
    runSaveAccountData(),
  ]);
}