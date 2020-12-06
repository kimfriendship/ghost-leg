import PathsContainer from "Containers/PathsContainer";
import React, { forwardRef } from "react";
import styled from "styled-components";

const Canvas = forwardRef((props, ref) => {
  const { playerCount, ladderPos } = props;

  return (
    <Wrapper ref={ref} top={ladderPos}>
      {Array.from({ length: playerCount }).map((_, idx) => (
        <PathsContainer key={idx} idx={idx} canvasRef={ref} />
      ))}
    </Wrapper>
  );
});

export default Canvas;

const Wrapper = styled.canvas`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: ${({ top }) => `${top}px`};
  left: 10%;
  width: 80%;
  height: 42rem;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    height: 12rem;
    top: 12.5rem;
    left: 0;
  }
`;
