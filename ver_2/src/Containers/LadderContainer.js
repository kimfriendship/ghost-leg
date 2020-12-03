import Ladder from "Components/Ladder";
import React, { useContext } from "react";
import { Context } from "Context";
import Partition from "Components/Partition";

const LadderContainer = () => {
  const { state, startGame } = useContext(Context);
  const { players, gameState } = state;

  return (
    <>
      {gameState === "setting" || gameState === "ready" ? (
        <Partition gameState={gameState} startGame={startGame} />
      ) : (
        <Ladder players={players} gameState={gameState} />
      )}
    </>
  );
};

export default LadderContainer;
