import { fork } from 'redux-saga/effects';
import firstTimeSaga from '../FirstTime/sagas/firstTime.saga';
import registriesSaga from '../registries/sagas';
import accountSaga from '../accounts/sagas';
import currencySaga from '../currencies/sagas';

export default function* rootSaga() {
  yield fork([
    firstTimeSaga,
    registriesSaga,
    accountSaga,
    currencySaga,
  ]);
}