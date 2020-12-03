import Case from "Components/CaseList";
import React, { useContext } from "react";
import { Context } from "Context";
import CaseList from "Components/CaseList";

const CaseListContainer = () => {
  const { state, inputCase } = useContext(Context);
  const { players, cases } = state;

  return <CaseList players={players} cases={cases} inputCase={inputCase} />;
};

export default CaseListContainer;
