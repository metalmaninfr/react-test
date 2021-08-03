import { call, put, takeLatest } from "redux-saga/effects";
import { movies$ } from "../../assets/movies.js"

import { Actions, Events } from "./actions";

function* getMovies() {
  try {
    yield put(Actions.getMovies.request());
    const request = yield call(() => movies$);
    yield put(Actions.getMovies.success(request));
  } catch (error) {
    yield put(Actions.getMovies.failure(error.response));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getMovies, getMovies);
}
