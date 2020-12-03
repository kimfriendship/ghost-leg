import React, { useContext } from "react";
import { Context } from "Context";
import CounterButton from "Components/CounterButton";

const CounterButtonContainer = ({ direction }) => {
  const { increasePlayers, decreasePlayers, state } = useContext(Context);

  return (
    <CounterButton
      playerCount={state.playerCount}
      increasePlayers={increasePlayers}
      decreasePlayers={decreasePlayers}
      direction={direction}
    />
  );
};

export default CounterButtonContainer;
