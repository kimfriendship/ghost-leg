import Players from "Components/Players";
import React, { useContext } from "react";
import { Context } from "Context";

const PlayersContainer = () => {
  const { state } = useContext(Context);
  const { players } = state;
  // console.log(
  //   "playersContainer rendering",
  //   players.map((p) => p.name)
  // );

  return <Players players={players} />;
};

export default React.memo(PlayersContainer);
