import React from "react";
import SubButton from "Components/SubButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ResultButton = ({ gameState, page, goResult }) => {
  if (page === "game" && (gameState === "playing" || gameState === "done"))
    return (
      <SubButton text="전체 결과 보기" icon={faArrowRight} event={goResult} />
    );
  else return null;
};

export default ResultButton;
