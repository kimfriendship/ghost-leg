import React, { useContext, useEffect } from "react";
import { Context } from "Context";
import CaseList from "Components/CaseList";

const CaseListContainer = () => {
  const { state, checkReady, resetCase, inputCase } = useContext(Context);
  const { players, playerCount, cases, gameState, results } = state;

  useEffect(() => {
    if (gameState === "setting") resetCase(playerCount);
  }, [gameState]);

  return (
    <CaseList
      players={players}
      playerCount={playerCount}
      cases={cases}
      results={results}
      gameState={gameState}
      checkReady={checkReady}
      inputCase={inputCase}
    />
  );
};

export default CaseListContainer;
