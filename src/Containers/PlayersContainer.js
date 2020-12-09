import Players from "Components/Players";
import React, { useContext, useEffect } from "react";
import { Context } from "Context";

const PlayersContainer = () => {
  const { state } = useContext(Context);
  const { players } = state;

  console.log("실행중 ==========");
  useEffect(() => {
    console.log(players);
  }, []);

  return <Players players={players} />;
};

export default React.memo(PlayersContainer);
