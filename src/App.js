import React, { useReducer, createContext } from "react";
import "./App.css";
import Main from "./Pages/Main";
import { mainReducer, mainInitialState, data } from "./Reducer";
import Game from "./Pages/Game";
import Result from "./Pages/Results";

export const GameContext = createContext({});

function App() {
  const [mainState, dispatch] = useReducer(mainReducer, mainInitialState);
  const { players, page, cases } = mainState;

  const resetGame = () => dispatch({ type: "RESET_GAME" });
  const newGame = () => dispatch({ type: "NEW_GAME" });
  const startGame = () => {
    for (let i = 0; i < players; i++) {
      if (!cases[i]) return;
    }
    dispatch({ type: "START_GAME" });
  };
  const readyGame = () => {
    for (let i = 0; i < players; i++) {
      if (!cases[i]) {
        dispatch({ type: "READY_GAME", game: "start" });
        return;
      }
    }
    dispatch({ type: "READY_GAME", game: "ready" });
  };

  const onIncBtn = () => {
    if (players >= 10) return;
    dispatch({ type: "INC_PLAYERS" });
  };

  const onDecBtn = () => {
    if (players <= 2) return;
    dispatch({ type: "DEC_PLAYERS" });
  };

  const onStartBtn = () => {
    dispatch({ type: "CHANGE_PAGE", page: "game" });
    getProfiles(players);
    getLegs();
  };

  const goBackBtn = () => {
    const p = page === "game" ? "main" : "game";
    dispatch({ type: "CHANGE_PAGE", page: p });
    resetGame();
  };

  const seeResultsBtn = () => {
    dispatch({ type: "CHANGE_PAGE", page: "results" });
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getProfiles = (players) => {
    let array = [getRandom(0, 9)];

    for (let i = 1; i < players; i++) {
      let index = getRandom(0, 9);
      if (array.includes(index)) {
        i--;
      } else {
        array = [...array, index];
      }
    }

    dispatch({
      type: "GET_PROFILES",
      profiles: array.map((index) => data[index]),
    });
  };

  const getInputs = ({ target }) => {
    const id = target.className;
    const value = target.value.trim();
    dispatch({ type: "GET_INPUTS", id, value });
  };

  const getLegs = () => {
    let legs = [];

    for (let i = 1; i < players; i++) {
      const count = getRandom(1, 4);

      for (let j = 1; j <= count; j++) {
        const p = getRandom(1, 9);
        const again = legs.filter(
          ({ line, pos }) => (line === i || line === i - 1) && pos === p
        );

        if (again.length) {
          j--;
        } else {
          legs = legs.concat({ line: i, pos: p });
        }
      }
    }

    dispatch({ type: "GET_LEGS", legs });
    getLadder(legs);
  };

  const getLadder = (legs) => {
    let ladder = [];

    for (let j = 1; j <= 9; j++) {
      let array = [];

      for (let i = 1; i < players; i++) {
        const isLine = legs.filter(({ line }) => line === i);
        const isLeg = isLine.filter(({ pos }) => pos === j).length;
        array = isLeg ? array.concat(1) : array.concat(0);
      }

      ladder = ladder.concat([array]);
    }

    dispatch({ type: "GET_LADDER", ladder });
  };

  const value = {
    mainState,
    dispatch,
    onIncBtn,
    onDecBtn,
    onStartBtn,
    goBackBtn,
    getInputs,
    getRandom,
    getLadder,
    startGame,
    readyGame,
    newGame,
    resetGame,
    seeResultsBtn,
  };

  return (
    <>
      <h1 className={"header"}>사다리 게임</h1>
      <main className={"body"}>
        <GameContext.Provider value={value}>
          {mainState.page === "main" ? (
            <Main />
          ) : mainState.page === "game" ? (
            <Game />
          ) : (
            <Result />
          )}
        </GameContext.Provider>
      </main>
    </>
  );
}

export default App;
