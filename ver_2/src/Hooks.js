import { useReducer } from "react";
import { initState, reducer } from "Reducer";

const useHook = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increasePlayers = () => dispatch({ type: "INCREASE_PLAYERS" });
  const decreasePlayers = () => dispatch({ type: "DECREASE_PLAYERS" });

  const enterGame = () => dispatch({ type: "ENTER_GAME" });
  const startGame = () => dispatch({ type: "START_GAME" });

  const isReady = (cases, playerCount) => {
    const values = Object.values(cases);
    const state = values.every((value) => value.trim() !== "");
    const caseCount = values.length === playerCount;
    dispatch({ type: "CHECK_READY", gameState: state && caseCount });
  };

  const resetCase = (playerCount) => {
    const cases = {};
    for (let i = 0; i < playerCount; i++) cases[i] = "";
    dispatch({ type: "RESET_CASE", cases });
  };

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

  const getRandomLegs = (playerCount) => {
    const legs = [];
    for (let i = 0; i < playerCount; i++) legs.push(getRandomNumber(1, 10));
    dispatch({ type: "GET_LEGS", legs });
  };

  const goHome = () => dispatch({ type: "GO_HOME" });
  const goResult = () => dispatch({ type: "GO_RESULT" });
  const goGame = () => dispatch({ type: "GO_GAME" });

  return {
    state,
    increasePlayers,
    decreasePlayers,
    enterGame,
    startGame,
    isReady,
    resetCase,
    inputCase,
    getRandomPlayers,
    getRandomLegs,
    goHome,
    goResult,
    goGame,
  };
};

export default useHook;
