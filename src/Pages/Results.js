import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faRedo } from "@fortawesome/free-solid-svg-icons";

const Results = () => {
  const context = useContext(GameContext);
  const { mainState, goBackBtn, newGame } = context;
  const { profiles, cases } = mainState;

  return (
    <div>
      <h2 className={"resultsTitle"}>결과</h2>
      <ul className={"results"}>
        {profiles.map(({ id, name, src, color, result }) => {
          return (
            <li key={id} className={"resultProfile"}>
              <img src={src} alt={name} className={"resultImg"} />
              <span style={{ background: color }} className={"resultCase"}>
                {cases[result]}
              </span>
            </li>
          );
        })}
      </ul>
      <button className={"resultsBtn"} onClick={newGame}>
        <span>새로운 게임</span>
        <FontAwesomeIcon icon={faRedo} className={"icon"} size={"2x"} />
      </button>
      <button onClick={goBackBtn} className={"goBackBtn"}>
        <span>뒤로 가기</span>
        <FontAwesomeIcon icon={faArrowLeft} className={"icon"} size={"2x"} />
      </button>
    </div>
  );
};

export default Results;
