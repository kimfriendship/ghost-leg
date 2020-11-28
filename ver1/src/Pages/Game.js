import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Canvas from "../Components/Canvas.js";
import Cases from "../Components/Cases.js";

const Game = () => {
  const context = useContext(GameContext);
  const { mainState, goBackBtn, startGame, seeResultsBtn } = context;
  const { profiles, game } = mainState;

  return (
    <>
      <ul className={"profiles"}>
        {profiles.map(({ id, name, src }) => {
          return (
            <li key={id} className={"profile"}>
              <img src={src} alt={name} />
            </li>
          );
        })}
      </ul>
      {game === "start" || game === "ready" ? (
        <div className={"ladderHide"}></div>
      ) : (
        <Canvas />
      )}
      <div className={"casesContainer"}>
        <Cases />
      </div>
      {game === "start" ? (
        <button className={"readyBtn"}>GO!</button>
      ) : game === "ready" ? (
        <button className={"goBtn"} onClick={startGame}>
          GO!
        </button>
      ) : null}
      {game === "end" ? (
        <button className={"resultsBtn"} onClick={seeResultsBtn}>
          <span>전체 결과 보기</span>
          <FontAwesomeIcon icon={faArrowRight} className={"icon"} size={"2x"} />
        </button>
      ) : null}
      <button onClick={goBackBtn} className={"goBackBtn"}>
        <span>뒤로 가기</span>
        <FontAwesomeIcon icon={faArrowLeft} className={"icon"} size={"2x"} />
      </button>
    </>
  );
};

export default Game;
