/* eslint-disable react-hooks/exhaustive-deps */
import Paths from "Components/Paths";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "Context";

const PathsContainer = ({ idx, canvasRef }) => {
  const { state, updateResult } = useContext(Context);
  const { legs, players, playerCount } = state;
  const [canvas, setCanvas] = useState(null);
  let draw = null;
  let posX = idx;
  let posY = 0;
  let isCrossing = false;

  const ctx = canvas && canvas.getContext("2d");
  const canvasWidth = canvas && canvas.width;
  const canvasHeight = canvas && canvas.height;
  const viewPort = window.innerWidth > 812 ? "pc" : "mobile";
  const radius = viewPort === "pc" ? 2 : 1.5;
  const move = 1;
  const gapX = canvasWidth / (playerCount * 2);
  const gapY = canvasHeight / 10;
  let coordX = gapX * (2 * idx + 1);
  let coordY = 0;

  const RIGHT = "RIGHT";
  const LEFT = "LEFT";
  const STRAIGHT = "STRAIGHT";
  let direction = STRAIGHT;

  const getFinalX = (newX) => gapX * (2 * newX + 1);

  const drawFootprint = (X, Y) => {
    ctx.beginPath();
    ctx.arc(X, Y, radius, 0, Math.PI * 10);
    ctx.fillStyle = players[idx].color;
    ctx.fill();
    ctx.closePath();
  };

  const crossLeg = (direction) => {
    const finalX = getFinalX(posX);
    const reachFinalRightX = direction === RIGHT && coordX >= finalX;
    const reachFinalLeftX = direction === LEFT && coordX <= finalX;

    coordX = direction === RIGHT ? coordX + move : coordX - move;
    drawFootprint(coordX, coordY);

    if (reachFinalLeftX || reachFinalRightX) {
      isCrossing = false;
      coordY += move;
    }
  };

  const drawPath = () => {
    let needChecking = coordY !== 0 && coordY % gapY === 0 && !isCrossing;

    if (coordY === canvasHeight) {
      clearInterval(draw);
      updateResult(idx, posX);
      console.log(idx, "번째 플레이어 결과", posX);
      return;
    }

    if (needChecking) {
      const isRight = (legs[posX] && legs[posX].includes(posY)) || false;
      const isLeft = (legs[posX - 1] && legs[posX - 1].includes(posY)) || false;
      direction = isRight ? RIGHT : isLeft ? LEFT : STRAIGHT;

      posY++;
      posX = isRight ? posX + move : isLeft ? posX - move : posX;
      isCrossing = direction !== STRAIGHT;
    }

    if (isCrossing) crossLeg(direction);
    if (!isCrossing) {
      coordY += move;
      drawFootprint(coordX, coordY);
    }
  };

  useEffect(() => {
    setCanvas(canvasRef.current);
    if (canvas) draw = setInterval(() => drawPath(), 1);

    return () => clearInterval(draw);
  }, [canvasRef, canvas]);

  return <Paths />;
};

export default PathsContainer;
