import React from "react";

import styled from "styled-components";

import { LikeDislike } from "../like-dislike"


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.3);
  padding: 2rem;
  min-width: 30rem;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const LikeDislikeContainer = styled.div`
  margin: 2rem 0 0;
  width: 25%;
  align-self: flex-end;
`;

const Cross = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:after,
  &:before {
    content: " ";
    position: absolute;
    left: 1.5rem;
    height: 100%;
    width: 0.2rem;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  } 
`;


export const Card = ({ id, title, category, likes, dislikes, setClosed, className }) => {
  return (
    <Container className={className}>
      <Cross onClick={() => setClosed(id)} />
      <Title>{title}</Title>
      <p>{category}</p>
      <LikeDislikeContainer>
        <LikeDislike likes={likes} dislikes={dislikes} />
      </LikeDislikeContainer>
    </Container>
  );
}
