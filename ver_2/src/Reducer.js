export const initState = {
  page: "home",
  playerCount: 2,
  players: [],
  cases: {},
  results: [],
  gameState: "ready",
  ladder: [],
  legs: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_PLAYERS":
      return {
        ...state,
        playerCount: state.playerCount + 1,
      };
    case "DECREASE_PLAYERS":
      return {
        ...state,
        playerCount: state.playerCount - 1,
      };
    case "START_GAME":
      return {
        ...state,
        page: "game",
      };
    default:
      throw new Error("Unhandled action type");
  }
};
