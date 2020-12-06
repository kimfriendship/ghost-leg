import Ladder from "Components/Ladder";
import React, { useContext, useEffect, useRef } from "react";
import { Context } from "Context";
import Partition from "Components/Partition";
import CanvasContainer from "./CanvasContainer";
import LadderCanvasWrapper from "Components/LadderCanvasWrapper";

const LadderContainer = () => {
  const { state, startGame, getRandomLegs, getLadderPos } = useContext(Context);
  const { legs, playerCount, gameState } = state;

  useEffect(() => {
    if (gameState === "setting") getRandomLegs(playerCount);
  }, [gameState]);

  return (
    <>
      {gameState === "setting" || gameState === "ready" ? (
        <Partition gameState={gameState} startGame={startGame} />
      ) : (
        <LadderCanvasWrapper>
          <Ladder legs={legs} playerCount={playerCount} gameState={gameState} />
          <CanvasContainer />
        </LadderCanvasWrapper>
      )}
    </>
  );
};

export default LadderContainer;
