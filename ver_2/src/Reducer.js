export const initState = {
  page: "home",
  playerCount: 2,
  players: [],
  cases: {},
  results: {},
  gameState: "setting",
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
    case "ENTER_GAME":
      return {
        ...state,
        page: "game",
      };
    case "START_GAME":
      return {
        ...state,
        gameState: "playing",
      };
    case "RESET_CASE":
      return {
        ...state,
        cases: action.cases,
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
    case "GET_PLAYERS":
      return {
        ...state,
        players: action.players,
      };
    case "GET_LEGS":
      return {
        ...state,
        legs: action.legs,
      };
    case "GO_HOME":
      return {
        ...state,
        page: "home",
        gameState: "setting",
      };
    case "GO_RESULT":
      return {
        ...state,
        page: "result",
        gameState: "setting",
      };
    case "GO_GAME":
      return {
        ...state,
        page: "game",
        gameState: "setting",
        results: {},
      };
    case "UPDATE_RESULT":
      return {
        ...state,
        gameState: "done",
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
    color: "darkslategray",
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
    color: "orangered",
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
    color: "maroon",
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
    color: "darkslateblue",
  },
];
