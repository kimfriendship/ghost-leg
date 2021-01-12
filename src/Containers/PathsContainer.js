/* eslint-disable react-hooks/exhaustive-deps */
import Paths from "Components/Paths";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "Context";

const PathsContainer = ({ idx, canvasRef }) => {
  const { state, updateResult } = useContext(Context);
  const { legs, players, playerCount } = state;
  const [canvas, setCanvas] = useState(null);
  const ctx = canvas && canvas.getContext("2d");

  const device = window.innerWidth > 812 ? "pc" : "mobile";
  const size = device === "pc" ? 5 : 2;
  const canvasWidth = canvas && canvas.width;
  const canvasHeight = canvas && canvas.height;
  const gapX = canvasWidth / (playerCount * 2);
  const gapY = Math.floor(canvasHeight / 10);
  const RIGHT = "RIGHT";
  const LEFT = "LEFT";
  const STRAIGHT = "STRAIGHT";
  let direction = STRAIGHT;
  let isCrossing = false;
  let draw = null;
  let coordX = gapX * (2 * idx + 1);
  let coordY = -3;
  let posX = idx;
  let posY = 0;
  const move = 1;

  // console.log(players[idx].name, "최초 지점", coordX);

  // const getMoveSize = () => {
  //   let divisor = 2;
  //   while (divisor < gapY) {
  //     console.log(gapX, gapY, divisor);
  //     if (gapY % divisor === 0) break;
  //     divisor++;
  //   }
  //   return 1;
  // };

  // const move = getMoveSize();

  const getFinalX = (newX, direction) => {
    let finalX = gapX * (2 * newX + 1);
    finalX = direction === RIGHT ? finalX - 1 : finalX + 1;
    return finalX;
  };

  const drawFootprint = (X, Y) => {
    ctx.beginPath();
    ctx.arc(X, Y, size, 0, Math.PI * 2);
    // ctx.rect(X - 3, Y, size, size);
    ctx.fillStyle = players[idx].color;
    ctx.fill();
    ctx.closePath();
  };

  const crossLeg = (direction) => {
    const finalX = getFinalX(posX, direction);
    // console.log("crossing legs", players[idx].name, finalX, coordX);
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

  return <Paths player={players[idx]} coords={[coordX, coordY]} />;
};

export default PathsContainer;
