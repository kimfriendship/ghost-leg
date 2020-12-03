import Players from "Components/Players";
import React, { useContext, useEffect } from "react";
import { Context } from "Context";
import { data } from "Reducer";

const PlayersContainer = () => {
  const { getRandomPlayers, state } = useContext(Context);
  const { players, playerCount } = state;

  useEffect(() => {
    getRandomPlayers(playerCount, data);
  }, []);

  return <Players players={players} />;
};

export default PlayersContainer;
