import { useReducer } from "react";
import { initState, reducer } from "Reducer";

const useHook = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increasePlayers = () => dispatch({ type: "INCREASE_PLAYERS" });
  const decreasePlayers = () => dispatch({ type: "DECREASE_PLAYERS" });

  const enterGame = () => dispatch({ type: "ENTER_GAME" });
  const startGame = () => dispatch({ type: "START_GAME" });

  const inputCase = (e, idx) => {
    const { value } = e.target;
    dispatch({ type: "INPUT_CASE", idx, value });
  };

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getRandomPlayers = (playerCount, data) => {
    const players = new Set();
    while (players.size < playerCount)
      players.add(data[getRandomNumber(0, 10)]);
    dispatch({ type: "GET_PLAYERS", players: [...players] });
  };

  return {
    state,
    increasePlayers,
    decreasePlayers,
    enterGame,
    startGame,
    inputCase,
    getRandomPlayers,
  };
};

export default useHook;
