import useHook from "Hooks";
import React from "react";

export const Context = React.createContext(null);

export const Provider = ({ children }) => {
  const { state, increasePlayers, decreasePlayers, startGame } = useHook();
  const contextValue = { state, increasePlayers, decreasePlayers, startGame };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
