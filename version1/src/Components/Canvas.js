/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { GameContext } from "../App.js";
import Paths from "./Paths.js";

const Canvas = () => {
  const context = useContext(GameContext);
  const { mainState } = context;
  const { players, legs, profiles } = mainState;

  const canvasRef = React.useRef(null);
  const resultsArray = new Array(players).fill(0);
  let canvas = null;
  let ctx = null;
  let legGap = 15;

  console.log("canvas=====", canvas, ctx);

  const drawLadders = () => {
    const width = canvas.width;
    const height = canvas.height;
    let stickX = width / (players * 2);
    let stickDiffX = stickX * 2;

    for (let c = 0; c < players; c++) {
      const rows = legs.filter((leg) => leg.line === c);

      ctx.beginPath();
      ctx.rect(stickX, 0, 2, height);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();

      for (let r = 0; r < rows.length; r++) {
        let stickY = rows[r].pos * legGap;

        ctx.beginPath();
        ctx.rect(stickX - stickDiffX, stickY, stickDiffX, 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
      }
      stickX += stickDiffX;
    }
  };

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    console.log(canvas, ctx);
    drawLadders();
  }, []);

  return (
    <>
      <canvas className={"canvas"} ref={canvasRef}></canvas>
      {profiles.map(({ id }, profile) => (
        <Paths
          key={id}
          canvasRef={canvasRef}
          profile={profile}
          resultsArray={resultsArray}
        />
      ))}
    </>
  );
};

export default Canvas;
