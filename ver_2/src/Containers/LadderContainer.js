import Ladder from "Components/Ladder";
import React, { useContext, useEffect } from "react";
import { Context } from "Context";
import Partition from "Components/Partition";

const LadderContainer = () => {
  const { state, startGame, getRandomLegs } = useContext(Context);
  const { legs, players, playerCount, gameState } = state;

  useEffect(() => {
    if (gameState === "setting") getRandomLegs(playerCount);
  }, [gameState]);

  return (
    <>
      {gameState === "setting" || gameState === "ready" ? (
        <Partition gameState={gameState} startGame={startGame} />
      ) : (
        <Ladder legs={legs} players={players} gameState={gameState} />
      )}
    </>
  );
};

export default LadderContainer;
