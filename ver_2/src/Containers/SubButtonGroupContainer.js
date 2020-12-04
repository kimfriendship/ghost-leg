import SubButtonGroup from "Components/SubButtonGroup";
import React, { useContext } from "react";
import { Context } from "Context";

const SubButtonGroupContainer = () => {
  const { state, goHome, goResult, goGame } = useContext(Context);
  const { gameState, page } = state;

  return (
    <SubButtonGroup
      gameState={gameState}
      page={page}
      goHome={goHome}
      goResult={goResult}
      goGame={goGame}
    />
  );
};

export default SubButtonGroupContainer;
