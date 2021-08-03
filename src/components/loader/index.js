import React from "react";
import styled, { keyframes } from "styled-components";

const RotateLoader = keyframes`
0% {
  transform: rotate(0);
}
75% {
  transform: rotate(360deg);
}
100% {
  transform: rotate(360deg);
}
}`


const Container = styled.div`
  height: 5rem;
  width: 5rem;
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-top-color: #000;
  animation: ${RotateLoader} 2s linear infinite;
  border-radius: 50%;
  `;

export const Loader = () => {
  return (
    <Container />
  );
}
