import Ladder from "Components/Ladder";
import React, { useContext, useEffect, useRef } from "react";
import { Context } from "Context";
import Partition from "Components/Partition";
import CanvasContainer from "./CanvasContainer";

const LadderContainer = () => {
  const { state, startGame, getRandomLegs, getLadderPos } = useContext(Context);
  const { legs, playerCount, gameState } = state;
  const wrapperRef = useRef();

  useEffect(() => {
    if (gameState === "setting") getRandomLegs(playerCount);
  }, [gameState]);

  useEffect(() => {
    const headerHeight = 80;
    const ladderTop = wrapperRef.current.offsetTop;
    getLadderPos(ladderTop + headerHeight);
  }, []);

  return (
    <>
      {gameState === "setting" || gameState === "ready" ? (
        <Partition
          ref={wrapperRef}
          gameState={gameState}
          startGame={startGame}
        />
      ) : (
        <>
          <Ladder legs={legs} playerCount={playerCount} gameState={gameState} />
          <CanvasContainer />
        </>
      )}
    </>
  );
};

export default LadderContainer;
