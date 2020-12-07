import EnterButton from "Components/EnterButton";
import React, { useContext } from "react";
import { Context } from "Context";

const EnterButtonContainer = () => {
  const { enterGame } = useContext(Context);

  return (
    <>
      <EnterButton enterGame={enterGame} />
    </>
  );
};

export default React.memo(EnterButtonContainer);
