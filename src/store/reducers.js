import { combineReducers } from "redux";

import { Movies } from "../core/movies";

const createRootReducer = combineReducers({
  movies: Movies.reducer,
});

export default createRootReducer;
