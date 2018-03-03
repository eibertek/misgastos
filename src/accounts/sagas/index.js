import { all, select, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  SETNEWACCOUNT,
  SAVEACCOUNT,
} from '../actions';


function* saveRegistryData({registryData}) {
  yield put({ type: SAVEACCOUNT, registryData });
}

function* runSaveData() {
  yield takeLatest(SETNEWACCOUNT, saveRegistryData);
}

export default function* rootSaga() {
  yield all([
    runSaveData(),
  ]);
}