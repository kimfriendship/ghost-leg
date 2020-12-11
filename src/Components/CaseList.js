import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import A11yTitle from "./A11yTitle";

const Case = React.memo(
  ({ idx, value, gameState, inputCase, resultColor, playerCount }) => {
    // console.log("cases rendering");
    return (
      <>
        <A11yTitle element="h3" text="케이스 입력 필드 리스트" />
        <CaseWrapper playerCount={playerCount}>
          {["setting", "ready", "notReady"].includes(gameState) ? (
            <CaseInput
              type="text"
              aria-label={`case ${idx + 1}`}
              placeholder={`case ${idx + 1}`}
              gameState={gameState}
              onChange={(e) => inputCase(e, idx)}
              value={value}
              tabIndex={idx + 2}
              autoFocus={!idx}
            />
          ) : (
            <CaseBox resultColor={resultColor}>{value}</CaseBox>
          )}
        </CaseWrapper>
      </>
    );
  }
);

const CaseList = ({
  players,
  playerCount,
  gameState,
  results,
  cases,
  checkReady,
  inputCase,
}) => {
  // console.log("caselist rendering");
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
            playerCount={playerCount}
            resultColor={players[result] && players[result].color}
          />
        );
      })}
    </CaseListWrapper>
  );
};

export default React.memo(CaseList);

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
  flex-basis: ${({ playerCount }) => (playerCount < 4 ? "30%" : "20%")};
  padding: 0 0.5%;
  min-width: 0;
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

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;
  }

  @media ${({ theme }) => theme.mobile} {
    &::placeholder {
      font-size: 1.4rem;
    }

    &:focus {
      box-shadow: 0 0 1px 1px white, 0 0 1px 2px cornflowerblue;
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
