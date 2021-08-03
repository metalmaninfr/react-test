import { getType } from "typesafe-actions";
import produce from "immer";
import { Events, Actions } from "./actions";

const initialState = {
  movies: [],
  isLoading: false,
};

export const MovieReducer = (
  state = initialState,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.getMovies.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getMovies.success):
        draft.movies = action.payload;
        draft.isLoading = false;
        break;
      case getType(Actions.getMovies.failure):
        draft.movies = action.payload;
        draft.isLoading = false;
        break;
      case getType(Events.deleteMovie):
        draft.movies = draft.movies.filter(movie => movie.id !== action.payload);
        draft.isLoading = false;
        break;
      default:
        return state;
    }
  });
};
