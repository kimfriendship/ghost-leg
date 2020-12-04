import React from "react";
import styled from "styled-components";

const LadderTable = ({ playerCount, legs, nth }) => {
  return (
    <Body
      playerCount={playerCount}
      isRightEdge={nth === playerCount - 2}
      isLeftEdge={nth === 0}
    >
      <Column>
        {Array.from({ length: 16 }).map((_, idx) => (
          <Row key={idx} isLeg={legs[nth].includes(idx)} />
        ))}
      </Column>
    </Body>
  );
};

const Ladder = ({ playerCount, legs }) => {
  return (
    <LadderWrapper>
      {Array.from({ length: playerCount - 1 }).map((_, idx) => (
        <LadderTable
          key={idx}
          playerCount={playerCount}
          legs={legs}
          nth={idx}
        />
      ))}
    </LadderWrapper>
  );
};

export default Ladder;

const Body = styled.tbody`
  width: ${({ playerCount }) => `calc(100% / ${playerCount})`};
  border-left: ${({ isLeftEdge }) =>
    isLeftEdge ? "6px solid black" : "3px solid black"};
  border-right: ${({ isRightEdge }) =>
    isRightEdge ? "6px solid black" : "3px solid black"};
`;

const Column = styled.tr`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Row = styled.td`
  background-color: lightgreen;
  height: 12.5%;
  border-bottom: ${({ isLeg }) => isLeg && "6px solid black"};
`;

const LadderWrapper = styled.table`
  width: 80%;
  height: 42rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  background-color: pink;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    height: 12rem;
    margin: 1rem auto;
  }
`;
