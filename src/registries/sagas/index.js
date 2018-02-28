import { all, select, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  SETNEWREGISTRY,
  SAVEREGISTRY,
} from '../actions';


function* saveRegistryData({registryData}) {
  yield put({ type: SAVEREGISTRY, registryData });
}

function* runSaveData() {
  yield takeLatest(SETNEWREGISTRY, saveRegistryData);
}

export default function* rootSaga() {
  yield all([
    runSaveData(),
  ]);
}