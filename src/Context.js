import useHook from "Hooks";
import React from "react";

export const Context = React.createContext(null);

export const Provider = ({ children }) => {
  const {
    state,
    incPlayers,
    decPlayers,
    enterGame,
    startGame,
    checkReady,
    inputCase,
    goHome,
    goResult,
    goGame,
    updateResult,
  } = useHook();

  const contextValue = {
    state,
    incPlayers,
    decPlayers,
    enterGame,
    startGame,
    checkReady,
    inputCase,
    goHome,
    goResult,
    goGame,
    updateResult,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
