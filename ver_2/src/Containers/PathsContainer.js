/* eslint-disable react-hooks/exhaustive-deps */
import Paths from "Components/Paths";
import React, {
  useRef,
  useEffect,
  useCallback,
  useContext,
  useState,
} from "react";
import { Context } from "Context";

const PathsContainer = ({ idx, canvasRef }) => {
  const { state } = useContext(Context);
  const { players, playerCount } = state;
  const [canvas, setCanvas] = useState(null);

  const ctx = canvas && canvas.getContext("2d");
  const canvasWidth = canvas && canvas.width;
  const canvasHeight = canvas && canvas.height;
  let gapX = canvasWidth / (playerCount * 2);
  let gapY = canvasHeight / 10;
  let posX =
    idx === 0
      ? gapX * (2 * idx + 1) + 1
      : idx === playerCount - 1
      ? gapX * (2 * idx + 1) - 1
      : gapX * (2 * idx + 1);
  let posY = gapY;

  console.log(idx, canvasWidth, canvasHeight, posX, gapY);

  const drawPath = () => {
    ctx.beginPath();
    ctx.arc(posX, posY, 2, 0, Math.PI * 5);
    ctx.fillStyle = players[idx].color;
    ctx.fill();
    ctx.closePath();
  };

  useEffect(() => {
    setCanvas(canvasRef.current);
    canvas && drawPath();
    console.log(canvasRef);
  }, [canvasRef, canvas]);

  return <Paths />;
};

export default PathsContainer;
