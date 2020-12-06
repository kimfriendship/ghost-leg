import { useReducer } from "react";
import { initState, reducer } from "Reducer";

const useHook = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increasePlayers = () => dispatch({ type: "INCREASE_PLAYERS" });
  const decreasePlayers = () => dispatch({ type: "DECREASE_PLAYERS" });

  const enterGame = () => dispatch({ type: "ENTER_GAME" });
  const startGame = () => dispatch({ type: "START_GAME" });

  const checkReady = (cases) => {
    const isReady = Object.values(cases).every((value) => value.trim() !== "");
    dispatch({ type: "CHECK_READY", isReady });
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
    const legCounts = [];
    const legs = [];
    let rows = new Set();
    let column = 0;

    for (let i = 1; i < playerCount; i++) legCounts.push(getRandomNumber(2, 5));

    while (column < playerCount - 1) {
      if (rows.size === legCounts[column]) {
        legs.push([...rows].sort());
        rows = new Set();
        column++;
      }

      const num = getRandomNumber(0, 9);
      if (column < 1) rows.add(num);
      else {
        const isDuplicate = legs[column - 1].includes(num);
        if (!isDuplicate) rows.add(num);
      }
    }

    dispatch({ type: "GET_LEGS", legs });
  };

  const goHome = () => dispatch({ type: "GO_HOME" });
  const goResult = () => dispatch({ type: "GO_RESULT" });
  const goGame = () => dispatch({ type: "GO_GAME" });

  const updateResult = (idx, posX) =>
    dispatch({ type: "UPDATE_RESULT", idx, posX });

  return {
    state,
    increasePlayers,
    decreasePlayers,
    enterGame,
    startGame,
    checkReady,
    resetCase,
    inputCase,
    getRandomPlayers,
    getRandomLegs,
    goHome,
    goResult,
    goGame,
    updateResult,
  };
};

export default useHook;
