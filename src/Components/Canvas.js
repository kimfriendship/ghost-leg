/* eslint-disable react-hooks/exhaustive-deps */
import PathsContainer from "Containers/PathsContainer";
import React, { forwardRef } from "react";
import styled from "styled-components";

const Canvas = forwardRef((props, ref) => {
  const { playerCount, ladderPos } = props;

  return (
    <>
      <Wrapper
        ref={ref}
        top={ladderPos}
        width={window.innerWidth * 0.8}
        height="300"
      />
      {Array.from({ length: playerCount }).map((_, idx) => (
        <PathsContainer key={idx} idx={idx} canvasRef={ref} />
      ))}
    </>
  );
});

export default React.memo(Canvas);

const Wrapper = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: pink;
  opacity: 0.5; */
`;
