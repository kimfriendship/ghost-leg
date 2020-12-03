import StartButton from "Components/StartButton";
import React, { useContext } from "react";
import { Context } from "Context";

const StartButtonContainer = () => {
  const { enterGame } = useContext(Context);

  return (
    <>
      <StartButton enterGame={enterGame} />
    </>
  );
};

export default StartButtonContainer;
