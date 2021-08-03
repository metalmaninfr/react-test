import React from "react";
import styled from "styled-components";

import { Movies as StoreMovies } from "../../core/movies";

import { Card } from "../../components/card";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const StyledCards = styled(Card)`
  margin: 1.5rem;
`;

export const Movies = ({ movies, filteredCategories, showAmount }) => {
  const deleteMovies = StoreMovies.deleteMovie();
  const filteredCategoriesValues = Object.entries(filteredCategories).map(item => {
    return item[1] && item[0];
  });


  return (
    <Container>
      {movies
        .filter(({ category }) => filteredCategoriesValues.includes(category))
        .slice(0, showAmount)
        .map(({ id, title, category, likes, dislikes }) => (
          <StyledCards
            key={id}
            id={id}
            setClosed={(id) => deleteMovies(id)}
            title={title}
            likes={likes}
            dislikes={dislikes}
            category={category}
          />
        )
      )}
    </Container>
  );
}
