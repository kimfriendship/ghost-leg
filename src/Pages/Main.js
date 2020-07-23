import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { GameContext } from "../App.js";

const Main = () => {
  const context = useContext(GameContext);
  const { mainState, onDecBtn, onIncBtn, onStartBtn } = context;

  return (
    <>
      <div className={"players"}>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className={"downBtn"}
          onClick={onDecBtn}
          color={mainState.players === 2 ? "lightgrey" : "orange"}
        />
        <span className={"number"}>{mainState.players}</span>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className={"upBtn"}
          onClick={onIncBtn}
          color={mainState.players === 10 ? "lightgrey" : "orange"}
        />
      </div>
      <button className={"startBtn"} onClick={onStartBtn}>
        START
      </button>
    </>
  );
};

export default Main;
