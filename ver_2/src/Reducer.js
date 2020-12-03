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

export const reducer = (action, state) => {
  switch (action) {
    default:
      throw new Error("Unhandled action type");
  }
};
