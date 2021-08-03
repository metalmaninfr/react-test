import React, { useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import { ProgressBar } from "../progress-bar";

const Container = styled.div`
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const LikeDislike = ({ className, likes, dislikes }) => {
  const [values, setValues] = useState({ likes, dislikes });
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <Container className={className}>
      <IconContainer>
        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            onClick={() => {
              setValues({ likes: liked ? values.likes - 1 : values.likes + 1, dislikes: disliked ? values.dislikes - 1 : values.dislikes });
              setLiked(!liked);
              setDisliked(false);
            }}
            color={liked ? "blue" : "grey"}
          />
          <p>{values.likes}</p>
        </div>
        <div>
        <FontAwesomeIcon
          icon={faThumbsDown}
          onClick={() => {
            setValues({ dislikes: disliked ? values.dislikes - 1 : values.dislikes + 1, likes: liked ? values.likes - 1 : values.likes });
            setDisliked(!disliked);
            setLiked(false);
          }}
          color={disliked ? "red" : "grey"}
        />
        <p>{values.dislikes}</p>
      </div>
      </IconContainer>
      <ProgressBar min={values.likes} max={values.dislikes} />
    </Container>
  );
}
