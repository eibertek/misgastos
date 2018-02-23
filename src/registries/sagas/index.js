import { all, put, takeLatest } from 'redux-saga/effects'
import {
  SETNEWREGISTRY,
  GETREGISTRIES,
  SAVEREGISTRY
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