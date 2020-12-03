import StartButton from "Components/StartButton";
import React, { useContext } from "react";
import { Context } from "Context";

const StartButtonContainer = () => {
  const { startGame } = useContext(Context);

  return (
    <>
      <StartButton startGame={startGame} />
    </>
  );
};

export default StartButtonContainer;
