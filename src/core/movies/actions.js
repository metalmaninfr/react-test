import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getMovies: createAction("movies/get")(),
  deleteMovie: createAction("movies/delete")(),
};

export const Actions = {
  getMovies: createAsyncAction(
    "movies/get/request",
    "movies/get/success",
    "movies/get/failure",
  )(),
};
