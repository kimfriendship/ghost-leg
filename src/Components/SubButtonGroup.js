import React from "react";
import HomeButton from "./HomeButton";
import RestartButton from "./RestartButton";
import ResultButton from "./ResultButton";
import styled from "styled-components";

const SubButtonGroup = ({ gameState, page, goHome, goResult, goGame }) => {
  return (
    <Wrapper page={page}>
      <HomeButton gameState={gameState} page={page} goHome={goHome} />
      <RestartButton gameState={gameState} page={page} goGame={goGame} />
      <ResultButton gameState={gameState} page={page} goResult={goResult} />
    </Wrapper>
  );
};

export default React.memo(SubButtonGroup);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10%;
  margin-top: 7rem;

  @media ${({ theme }) => theme.mobile} {
    margin-right: 1.5rem;
    margin-top: 4rem;
  }
`;
