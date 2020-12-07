import Ladder from "Components/Ladder";
import React, { useContext, useEffect } from "react";
import { Context } from "Context";
import Partition from "Components/Partition";
import CanvasContainer from "./CanvasContainer";
import LadderCanvasWrapper from "Components/LadderCanvasWrapper";

const LadderContainer = () => {
  const { state, startGame, getRandomLegs } = useContext(Context);
  const { legs, playerCount, gameState } = state;

  useEffect(() => {
    if (gameState === "setting") getRandomLegs(playerCount);
  }, [gameState]);

  return (
    <>
      {["setting", "ready", "notReady"].includes(gameState) ? (
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

export default React.memo(LadderContainer);
