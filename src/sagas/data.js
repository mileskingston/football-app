import { call, takeEvery, takeLatest, fork, put, all } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api/index';

function* fetchStandings() {
  try {
    const data = yield call(api.callStandingsApi);
    yield put({ type: actions.STANDINGS_SUCCESS, standings: data });
  } catch(e) {
    yield put(actions.apiFail(data));
  }
}

function* fetchTeams() {
  try {
    const data = yield call(api.callTeamsApi);
    yield put({ type: actions.TEAMS_SUCCESS, teams: data });
  } catch(e) {
    yield put(actions.apiFail(data));
  }
}

function* watchFetchStandings() {
  yield takeEvery(actions.STANDINGS_REQUEST, fetchStandings);
};

function* watchFetchTeams() {
  yield takeEvery(actions.TEAMS_REQUEST, fetchTeams);
};

export default function* rootSaga() {
  yield all([fork(fetchStandings), fork(watchFetchStandings), fork(fetchTeams), fork(watchFetchTeams)]);
}