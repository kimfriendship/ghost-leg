import React from "react";

export const Context = React.createContext(null);

export const Provider = ({ children }) => {
  const contextValue = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
