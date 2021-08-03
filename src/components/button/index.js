import React from "react";
import styled from "styled-components";


const Container = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: white;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: #124e78;
  width: 100%;
`;

export const Button = ({ text, onClick, className }) => {
  return (
    <Container onClick={() => onClick()} className={className}>
      {text}
    </Container>
  );
}
