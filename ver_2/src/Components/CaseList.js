import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const Case = ({ idx, value, gameState, inputCase, resultColor }) => {
  return (
    <CaseWrapper>
      {gameState === "setting" || gameState === "ready" ? (
        <CaseInput
          placeholder={`case ${idx + 1}`}
          gameState={gameState}
          onChange={(e) => inputCase(e, idx)}
          value={value}
        />
      ) : (
        <CaseBox resultColor={gameState === "done" && resultColor}>
          {value}
        </CaseBox>
      )}
    </CaseWrapper>
  );
};

const CaseList = ({
  playerCount,
  players,
  gameState,
  results,
  cases,
  isReady,
  inputCase,
}) => {
  useEffect(() => {
    isReady(cases, playerCount);
  }, [cases]);

  return (
    <CaseListWrapper>
      {players.map((_, idx) => (
        <Case
          key={idx}
          idx={idx}
          value={cases[idx]}
          gameState={gameState}
          inputCase={inputCase}
          // resultColor={gameState === "done" && players[results[idx]].color}
        />
      ))}
    </CaseListWrapper>
  );
};

export default CaseList;

const CaseListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 80%;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const CaseWrapper = styled.li`
  width: 20%;
  padding: 0 0.5%;
`;

const caseStyle = css`
  height: 4rem;
  width: 100%;
  border: 2px solid cornflowerblue;
  border-radius: 5px;
  font-size: 1.6rem;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    height: 3rem;
    font-size: 1.4rem;
  }
`;

const CaseInput = styled.input`
  ${caseStyle};

  &::placeholder {
    text-align: center;
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mobile} {
    &::placeholder {
      font-size: 1.4rem;
    }
  }
`;

const CaseBox = styled.div`
  ${caseStyle};
  color: white;
  background-color: ${({ resultColor }) => resultColor || "cornflowerblue"};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
