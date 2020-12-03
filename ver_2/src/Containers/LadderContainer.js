import Ladder from "Components/Ladder";
import React, { useContext } from "react";
import { Context } from "Context";
import Partition from "Components/Partition";

const LadderContainer = () => {
  const { state, playGame } = useContext(Context);
  const { players, gameState } = state;

  return (
    <>
      {gameState === "setting" || "ready" ? (
        <Partition gameState={gameState} playGame={playGame} />
      ) : (
        <Ladder players={players} gameState={gameState} />
      )}
    </>
  );
};

export default LadderContainer;
