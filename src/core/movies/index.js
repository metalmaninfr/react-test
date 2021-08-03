import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events } from "./actions";
import { MovieReducer } from "./reducer";
import { isLoading, movies, categories, initialCheckboxesValues } from "./selectors";

function useGetMovies() {
  const dispatch = useDispatch();
  return () => dispatch(Events.getMovies());
}

function useDeleteMovie() {
  const dispatch = useDispatch();
  return (movie) => dispatch(Events.deleteMovie(movie));
}

function useIsLoading() {
  return useSelector(isLoading);
}

function useMovies() {
  return useSelector(movies);
}

function useCategories() {
  return useSelector(categories);
}

function useInitialCheckboxesValues() {
  return useSelector(initialCheckboxesValues);
}

export const Movies = {
  getMovies: useGetMovies,
  deleteMovie: useDeleteMovie,
  isLoading: useIsLoading,
  movies: useMovies,
  categories: useCategories,
  initialCheckboxesValues: useInitialCheckboxesValues,
  sagas: rootSagas,
  reducer: MovieReducer,
};
