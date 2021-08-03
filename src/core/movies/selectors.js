import { createSelector } from "reselect";

export const State = (state) => state.movies;
export const movies = (state) => State(state).movies;
export const isLoading = (state) => State(state).isLoading;

export const categories = createSelector([movies], (_movies) => {
    return _movies.filter(({ category }, index) => {
      return _movies.findIndex(movie => movie.category === category) === index 
    }).map(({category}) => category);
  }
);

export const initialCheckboxesValues = createSelector([categories], (_categories) => {
    const values = new Object;
    _categories.forEach((item) => {
        values[item] = true;
    });
    return values
  }
);
