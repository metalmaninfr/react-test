import React, { useState, useEffect } from "react";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: .5rem;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0.3;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const Progress = styled.div(props => ({
  position: "absolute",
  height: "100%",
  width: `${props.progress}%`,
  background: "rgba(0, 0, 0, 1)",
}));


export const ProgressBar = ({ min = 0, max = 0 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Number(Math.round((max / min) * 100).toFixed(2)));
  }, [min, max]);

  return (
    <Container>
      <Progress progress={100 - progress} />
    </Container>
  );
};
