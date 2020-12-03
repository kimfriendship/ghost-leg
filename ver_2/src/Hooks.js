import { useReducer } from "react";
import { initState, reducer } from "Reducer";

const useHook = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increasePlayers = () => dispatch({ type: "INCREASE_PLAYERS" });
  const decreasePlayers = () => dispatch({ type: "DECREASE_PLAYERS" });
  const startGame = () => dispatch({ type: "START_GAME" });

  return { state, increasePlayers, decreasePlayers, startGame };
};

export default useHook;
