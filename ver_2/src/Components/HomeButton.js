import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import SubButton from "./SubButton";

const HomeButton = ({ gameState, page, goHome }) => {
  if (
    (page === "game" && gameState !== "playing" && gameState !== "done") ||
    page === "result"
  )
    return <SubButton text="처음으로" icon={faHome} event={goHome} />;
  else return null;
};

export default React.memo(HomeButton);
