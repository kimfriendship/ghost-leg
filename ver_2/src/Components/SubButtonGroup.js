import React from "react";
import HomeButton from "./HomeButton";
import RestartButton from "./RestartButton";
import ResultButton from "./ResultButton";
import styled from "styled-components";

const SubButtonGroup = ({ gameState, page, goHome, goResult, goGame }) => {
  return (
    <Wrapper>
      <HomeButton gameState={gameState} page={page} goHome={goHome} />
      <ResultButton gameState={gameState} page={page} goResult={goResult} />
      <RestartButton gameState={gameState} page={page} goGame={goGame} />
    </Wrapper>
  );
};

export default SubButtonGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10%;
  margin-top: 5rem;
`;
