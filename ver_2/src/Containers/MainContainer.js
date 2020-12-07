import React, { useContext } from "react";
import Main from "Components/Main";
import Game from "Pages/Game";
import Home from "Pages/Home";
import Result from "Pages/Result";
import { Context } from "Context";

const MainContainer = () => {
  const { state } = useContext(Context);
  const { page, gameState } = state;

  return (
    <Main page={page} gameState={gameState}>
      {page === "home" ? <Home /> : page === "game" ? <Game /> : <Result />}
    </Main>
  );
};

export default React.memo(MainContainer);
