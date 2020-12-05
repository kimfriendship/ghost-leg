import PathsContainer from "Containers/PathsContainer";
import React, { forwardRef } from "react";
import styled from "styled-components";

const Canvas = forwardRef((props, ref) => {
  const { playerCount } = props;

  return (
    <Wrapper ref={ref}>
      {Array.from({ length: playerCount }).map((_, idx) => (
        <PathsContainer key={idx} idx={idx} canvasRef={ref} />
      ))}
    </Wrapper>
  );
});

export default Canvas;

const Wrapper = styled.canvas`
  background-color: lightyellow;
  opacity: 0.5;
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 18rem;
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
