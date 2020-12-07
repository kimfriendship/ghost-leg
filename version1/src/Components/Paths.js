/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { GameContext } from "../App.js";

const Paths = ({ canvasRef, profile, resultsArray }) => {
  const context = useContext(GameContext);
  const { mainState, dispatch } = context;
  const { players, profiles, ladder, game } = mainState;

  let startDrawing = null;
  let canvas = null;
  let ctx = null;
  let legGap = 15;
  let isCrossing = false;
  let firstX = 0;
  let diffX = 0;
  let ballX = 0;
  let ballY = 2;
  let LR = 0;
  let LC = 0;

  console.log("pahts=====", canvas, ctx);

  const drawBalls = (p) => {
    ctx.beginPath();
    ctx.arc(ballX + 1, ballY, 2, 0, Math.PI * 2);
    ctx.fillStyle = profiles[p].color;
    ctx.fill();
    ctx.closePath();
  };

  const crossLegs = (p, move, ballX, ballY) => {
    isCrossing = true;
    const rightGap = firstX * (LC ? 2 * LC + 3 : 3);
    const leftGap = firstX * (LC === 1 ? LC : 2 * LC - 1);

    if (move > 0) {
      for (let i = 0; ballX < rightGap; i++) {
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 0.5, 0, Math.PI * 2);
        ctx.fillStyle = profiles[p].color;
        ctx.fill();
        ctx.closePath();
      }
    }
    if (move < 0) {
      for (let i = 0; ballX > leftGap; i++) {
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 0.5, 0, Math.PI * 2);
        ctx.fillStyle = profiles[p].color;
        ctx.fill();
        ctx.closePath();
      }
    }

    return ballX;
  };

  const drawLines = (p) => {
    if (isCrossing) return;
    if (ballY === canvas.height + 30) {
      clearInterval(startDrawing);
      dispatch({
        type: "GET_RESULTS",
        results: resultsArray,
      });
    }

    const checkLegs = ballY % legGap === 0;
    let move = 1;
    let straight = true;
    let right = false;
    let left = false;

    if (checkLegs) {
      if (LR <= 8) {
        right = ladder[LR][LC] === 1;
        left = ladder[LR][LC - 1] === 1;
        straight = right || left ? false : true;
      }

      if (straight) {
        ballY += move;
        drawBalls(p, ballX, diffX, ballY);
      }

      if (right) {
        ballX = crossLegs(p, 1, ballX, ballY);
        isCrossing = false;
        LC += 1;
        ballY += 1;
      }

      if (left) {
        ballX = crossLegs(p, -1, ballX, ballY);
        isCrossing = false;
        LC -= 1;
        ballY += 1;
      }
    } else {
      drawBalls(p, ballX, diffX, ballY);
    }

    if (checkLegs) LR++;
    if (!checkLegs && straight) ballY += move;
    resultsArray[p] = LC;
  };

  useEffect(() => {
    if (game === "end") return;
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    firstX = canvas.width / (players * 2);
    diffX = firstX * 2;
    ballX = firstX + diffX * profile;
    LC = profile;

    console.log(canvas, ctx);

    startDrawing = setInterval(() => drawLines(profile), 10);
    return () => clearInterval(startDrawing);
  });

  return <canvas width={1} height={1}></canvas>;
};

export default Paths;
