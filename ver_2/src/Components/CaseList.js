import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const Case = ({ idx, value, gameState, inputCase, resultColor }) => {
  return (
    <CaseWrapper>
      {["setting", "ready", "notReady"].includes(gameState) ? (
        <CaseInput
          placeholder={`case ${idx + 1}`}
          gameState={gameState}
          onChange={(e) => inputCase(e, idx)}
          value={value}
        />
      ) : (
        <CaseBox resultColor={resultColor}>{value}</CaseBox>
      )}
    </CaseWrapper>
  );
};

const CaseList = ({
  players,
  gameState,
  results,
  cases,
  checkReady,
  inputCase,
}) => {
  useEffect(() => {
    Object.keys(cases).length && checkReady(cases);
  }, [cases]);

  return (
    <CaseListWrapper>
      {players.map((_, idx) => {
        let result = null;
        for (const player in results) {
          if (results[player] === idx) result = player;
        }
        return (
          <Case
            key={idx}
            idx={idx}
            value={cases[idx]}
            gameState={gameState}
            inputCase={inputCase}
            resultColor={players[result] && players[result].color}
          />
        );
      })}
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

const CaseBox = styled.span`
  ${caseStyle};
  color: white;
  background-color: ${({ resultColor }) => resultColor || "cornflowerblue"};
  border: none;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 1rem;
  line-height: 4rem;

  @media ${({ theme }) => theme.mobile} {
    line-height: 3rem;
  }
`;
