import Players from "Components/Players";
import React, { useContext } from "react";
import { Context } from "Context";

const PlayersContainer = () => {
  const { state } = useContext(Context);
  const { players } = state;

  return <Players players={players} />;
};

export default React.memo(PlayersContainer);
