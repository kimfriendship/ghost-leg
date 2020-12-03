import Case from "Components/CaseList";
import React, { useContext } from "react";
import { Context } from "Context";
import CaseList from "Components/CaseList";

const CaseListContainer = () => {
  const { state } = useContext(Context);
  const { players } = state;

  return <CaseList players={players} />;
};

export default CaseListContainer;
