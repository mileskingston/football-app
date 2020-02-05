import { call, takeEvery, takeLatest, fork, put, all } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api/index';

function* fetchData() {
  try {
    const data = yield call(api.callFootballApi);
    yield put({ type: actions.API_SUCCESS, standings: data });
  } catch(e) {
    yield put(actions.apiFail(data));
  }
}

function* watchFetchData() {
  yield takeEvery(actions.API_REQUEST, fetchData);
};

export default function* rootSaga() {
  yield all([fork(fetchData), fork(watchFetchData)]);
}