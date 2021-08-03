import { all } from "redux-saga/effects";
import { Movies } from "../core/movies";

export default function* rootSaga() {
  yield all([
    Movies.sagas(),
  ]);
}
