import React from "react";
import SubButton from "./SubButton";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const RestartButton = ({ gameState, page, goGame }) => {
  if (
    (page === "game" && (gameState === "playing" || gameState === "done")) ||
    page === "result"
  )
    return (
      <SubButton
        label="게임 다시 하기"
        text="다시 하기"
        icon={faRedo}
        event={goGame}
      />
    );
  else return null;
};

export default RestartButton;
