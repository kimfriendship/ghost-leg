import Players from "Components/Players";
import React, { useContext, useEffect } from "react";
import { Context } from "Context";
import { data } from "Reducer";

const PlayersContainer = () => {
  const { getRandomPlayers, state } = useContext(Context);
  const { players, playerCount, gameState } = state;

  useEffect(() => {
    if (gameState === "setting") getRandomPlayers(playerCount, data);
  }, [gameState]);

  return <Players players={players} />;
};

export default PlayersContainer;
// export default React.memo(PlayersContainer);
