import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { Movies as CoreMovies } from "./core/movies";

import { Loader } from './components/loader';
import { Movies } from './kommon/movies';
import { FilterBar } from "./components/filter-bar";
import { Button } from "./components/button";


const Container = styled.div(props => ({
  margin: "0 1.5rem",
  width: "80%",
  marginBottom: `${props.buttonContainerHeight}px`,
}));

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.3);
  background: white;
`;

const StyledButton = styled(Button)`
  margin: 2rem 1.5rem 0;
  width: 20%;
`;

const StyledFilterBar = styled(FilterBar)`
  margin: 2rem 1.5rem 0;
`;

const App = () => {
  const getMovies = CoreMovies.getMovies();
  const movies = CoreMovies.movies();
  const isLoading = CoreMovies.isLoading();
  
  const [ filteredCategory, setFilteredCategory ] = useState([]);
  const incrementValue = 4;
  const incrementValueMax = 12;
  const incrementValueMin = 4;
  const [ showAmount, setShowAmount ] = useState(incrementValue);
  const buttonContainer = useRef(null);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Container buttonContainerHeight={buttonContainer.current?.scrollHeight}>
        {isLoading && 
          <Loader isLoading={isLoading} />
        }
        <StyledFilterBar
          onChange={(e) => setFilteredCategory(e)}
        />
        <Movies
          movies={movies}
          filteredCategories={filteredCategory}
          showAmount={showAmount}
        />
      </Container>
      <ButtonContainer ref={buttonContainer}>
        {showAmount !== incrementValueMin ? (
          <StyledButton text="show less" onClick={() => setShowAmount(showAmount - incrementValue)} />
          ) : (
            <div />
            )}
        {showAmount !== incrementValueMax ? (
          <StyledButton text="show more" onClick={() => setShowAmount(showAmount + incrementValue)} />
          ) : (
            <div />
            )}
      </ButtonContainer>
    </div>
  );
}

export default App;
