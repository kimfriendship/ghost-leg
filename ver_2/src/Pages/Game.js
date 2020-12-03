import CaseContainer from "Containers/CaseListContainer";
import LadderContainer from "Containers/LadderContainer";
import PlayersContainer from "Containers/PlayersContainer";
import SubButtonGroupContainer from "Containers/SubButtonGroupContainer";
import React from "react";

const Game = () => {
  return (
    <>
      <PlayersContainer />
      <LadderContainer />
      <CaseContainer />
      <SubButtonGroupContainer />
    </>
  );
};

export default Game;
