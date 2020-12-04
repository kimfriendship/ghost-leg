import Canvas from "Components/Canvas";
import React, { useRef, useContext, useEffect } from "react";
import { Context } from "Context";

const CanvasContainer = () => {
  const { state } = useContext(Context);
  const { playerCount } = state;
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(canvasRef.current);
  }, []);

  return <Canvas playerCount={playerCount} ref={canvasRef} />;
};

export default CanvasContainer;
