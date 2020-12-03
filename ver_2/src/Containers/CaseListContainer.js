import Case from "Components/CaseList";
import React, { useContext } from "react";
import { Context } from "Context";
import CaseList from "Components/CaseList";

const CaseListContainer = () => {
  const { state, isReady, inputCase } = useContext(Context);
  const { players, playerCount, cases } = state;

  return (
    <CaseList
      players={players}
      playerCount={playerCount}
      cases={cases}
      isReady={isReady}
      inputCase={inputCase}
    />
  );
};

export default CaseListContainer;
