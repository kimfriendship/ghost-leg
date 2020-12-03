import Counter from "Components/Counter";
import React, { useContext } from "react";
import { Context } from "Context";

const CounterContainer = () => {
  const { state } = useContext(Context);
  const { playerCount } = state;
  return (
    <>
      <Counter playerCount={playerCount} />
    </>
  );
};

export default CounterContainer;
