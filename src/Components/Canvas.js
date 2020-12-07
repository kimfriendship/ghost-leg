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

export default React.memo(Canvas);

const Wrapper = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
