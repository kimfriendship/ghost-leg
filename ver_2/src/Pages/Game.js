import CaseContainer from "Containers/CaseListContainer";
import LadderContainer from "Containers/LadderContainer";
import PlayersContainer from "Containers/PlayersContainer";
import React from "react";

const Game = () => {
  return (
    <>
      <PlayersContainer />
      <LadderContainer />
      <CaseContainer />
    </>
  );
};

export default Game;
