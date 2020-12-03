import React from "react";
import Game from "Pages/Game";
import Home from "Pages/Home";
import Result from "Pages/Result";
import ResetStyle from "Styles/reset";
import styled from "styled-components";
import Header from "Components/Header";

function App({ Context }) {
  const { page } = React.useContext(Context);
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
