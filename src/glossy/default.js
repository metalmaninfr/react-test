import { createGlobalStyle } from "styled-components";


export const DefaultStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

  html {
    font-size: 62.5%;
  }

  h2, p {
    padding: 0;
    margin: 0;
    font-family: 'Anton', sans-serif;
  }
`
