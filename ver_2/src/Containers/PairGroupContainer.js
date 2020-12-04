import PairGroup from "Components/PairGroup";
import React, { useContext } from "react";
import { Context } from "Context";

const PairGroupContainer = () => {
  const { state } = useContext(Context);
  const { results } = state;

  return <PairGroup results={results} />;
};

export default PairGroupContainer;
