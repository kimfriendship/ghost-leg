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
  let draw = null;

  const ctx = canvas && canvas.getContext("2d");
  const canvasWidth = canvas && canvas.width;
  const canvasHeight = canvas && canvas.height;
  const viewPort = window.innerWidth > 812 ? "pc" : "mobile";
  const radius = viewPort === "pc" ? 2 : 1.5;
  const gapX = canvasWidth / (playerCount * 2);
  const gapY = canvasHeight / 10;
  const diff = gapX * (2 * idx + 1);
  let posX = idx === 0 ? diff + 1 : idx === playerCount - 1 ? diff - 1 : diff;
  let posY = 0;

  const drawFootprint = () => {
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, Math.PI * 10);
    ctx.fillStyle = players[idx].color;
    ctx.fill();
    ctx.closePath();
  };

  const drawPath = () => {
    if (posY === canvasHeight) {
      clearInterval(draw);
      return;
    }

    const needChecking = !(posY % gapY);
    if (needChecking) console.log(posY);

    posY += radius;

    drawFootprint();
  };

  useEffect(() => {
    setCanvas(canvasRef.current);
    if (canvas) draw = setInterval(() => drawPath(), 30);
  }, [canvasRef, canvas]);

  return <Paths />;
};

export default PathsContainer;
