import React from "react";
import SubButton from "Components/SubButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ResultButton = ({ gameState, page, goResult }) => {
  if (page === "game" && gameState === "done")
    return (
      <SubButton
        label="게임 전체 결과 보기"
        live="assertive"
        text="전체 결과 보기"
        icon={faArrowRight}
        event={goResult}
        focus={gameState === "done"}
      />
    );
  else return null;
};

export default ResultButton;
