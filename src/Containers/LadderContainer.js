import Ladder from "Components/Ladder";
import React, { useContext } from "react";
import { Context } from "Context";
import Partition from "Components/Partition";
import CanvasContainer from "./CanvasContainer";
import LadderCanvasWrapper from "Components/LadderCanvasWrapper";

const LadderContainer = () => {
  const { state, startGame } = useContext(Context);
  const { legs, playerCount, gameState } = state;

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
