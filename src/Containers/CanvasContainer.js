import Canvas from "Components/Canvas";
import React, { useRef, useContext } from "react";
import { Context } from "Context";

const CanvasContainer = () => {
  const { state } = useContext(Context);
  const { ladderPos, playerCount } = state;
  const canvasRef = useRef(null);

  return (
    <Canvas ladderPos={ladderPos} playerCount={playerCount} ref={canvasRef} />
  );
};

export default CanvasContainer;
