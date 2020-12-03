import useHook from "Hooks";
import React from "react";

export const Context = React.createContext(null);

export const Provider = ({ children }) => {
  const {
    state,
    increasePlayers,
    decreasePlayers,
    enterGame,
    startGame,
    isReady,
    inputCase,
    getRandomPlayers,
  } = useHook();

  const contextValue = {
    state,
    increasePlayers,
    decreasePlayers,
    enterGame,
    startGame,
    isReady,
    inputCase,
    getRandomPlayers,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
