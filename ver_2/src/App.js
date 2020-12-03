import React, { useContext } from "react";
import Game from "Pages/Game";
import Home from "Pages/Home";
import Result from "Pages/Result";
import ResetStyle from "Styles/reset";
import styled from "styled-components";
import Header from "Components/Header";
import { Context } from "Context";

function App() {
  const { state } = useContext(Context);
  const { page } = state;
  return (
    <>
      <Header />
      <Main>
        {page === "home" ? <Home /> : page === "game" ? <Game /> : <Result />}
        <ResetStyle />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 100vw;
`;
