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
    resetCase,
    inputCase,
    getRandomLegs,
    getRandomPlayers,
    goHome,
    goResult,
    goGame,
    updateResult,
  } = useHook();

  const contextValue = {
    state,
    increasePlayers,
    decreasePlayers,
    enterGame,
    startGame,
    isReady,
    resetCase,
    inputCase,
    getRandomLegs,
    getRandomPlayers,
    goHome,
    goResult,
    goGame,
    updateResult,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
