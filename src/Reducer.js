import { resetCase, getRandomLegs, getRandomPlayers } from "Utils";

export const initState = {
  page: "home",
  playerCount: 2,
  players: [],
  cases: {},
  results: {},
  gameState: "notReady",
  legs: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC_PLAYERS":
      return {
        ...state,
        playerCount: state.playerCount + 1,
      };
    case "DEC_PLAYERS":
      return {
        ...state,
        playerCount: state.playerCount - 1,
      };
    case "ENTER_GAME":
      return {
        ...state,
        page: "game",
        players: getRandomPlayers(state.playerCount, data),
        cases: resetCase(state.playerCount),
        legs: getRandomLegs(state.playerCount),
      };
    case "START_GAME":
      return {
        ...state,
        gameState: "playing",
      };
    case "INPUT_CASE":
      return {
        ...state,
        cases: { ...state.cases, [action.idx]: action.value },
      };
    case "CHECK_READY":
      return {
        ...state,
        gameState: action.isReady ? "ready" : "notReady",
      };
    case "GO_HOME":
      return {
        ...state,
        page: "home",
        gameState: "notReady",
      };
    case "GO_RESULT":
      return {
        ...state,
        page: "result",
        gameState: "notReady",
      };
    case "GO_GAME":
      return {
        ...state,
        page: "game",
        gameState: "notReady",
        results: {},
        players: getRandomPlayers(state.playerCount, data),
        cases: resetCase(state.playerCount),
        legs: getRandomLegs(state.playerCount),
      };
    case "UPDATE_RESULT":
      return {
        ...state,
        gameState:
          Object.keys(state.results).length + 1 === state.playerCount
            ? "done"
            : "playing",
        results: { ...state.results, [action.idx]: action.posX },
      };
    default:
      throw new Error("Unhandled action type");
  }
};

export const data = [
  {
    id: 1,
    name: "토끼",
    src: "https://image.flaticon.com/icons/svg/3069/3069187.svg",
    color: "gray",
  },
  {
    id: 2,
    name: "돼지",
    src: "https://image.flaticon.com/icons/svg/3069/3069273.svg",
    color: "crimson",
  },
  {
    id: 3,
    name: "펭귄",
    src: "https://image.flaticon.com/icons/svg/3069/3069217.svg",
    color: "darkolivegreen",
  },
  {
    id: 4,
    name: "카멜레온",
    src: "https://image.flaticon.com/icons/svg/3069/3069230.svg",
    color: "lightseagreen",
  },
  {
    id: 5,
    name: "강아지",
    src: "https://image.flaticon.com/icons/svg/3069/3069267.svg",
    color: "darkorange",
  },
  {
    id: 6,
    name: "기린",
    src: "https://image.flaticon.com/icons/svg/3069/3069201.svg",
    color: "peru",
  },
  {
    id: 7,
    name: "돌고래",
    src: "https://image.flaticon.com/icons/svg/3069/3069269.svg",
    color: "royalblue",
  },
  {
    id: 8,
    name: "말",
    src: "https://image.flaticon.com/icons/svg/3069/3069284.svg",
    color: "saddlebrown",
  },
  {
    id: 9,
    name: "여우",
    src: "https://image.flaticon.com/icons/svg/3069/3069166.svg",
    color: "salmon",
  },
  {
    id: 10,
    name: "코끼리",
    src: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
    color: "rebeccapurple",
  },
];
