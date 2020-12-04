import React from "react";
import styled from "styled-components";

const LadderTable = ({ count }) => {
  return (
    <Body count={count}>
      <Column>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Row key={idx} />
        ))}
      </Column>
    </Body>
  );
};

const Ladder = ({ players, legs }) => {
  return (
    <LadderWrapper>
      {Array.from({ length: players.length - 1 }).map((_, idx) => (
        <LadderTable key={idx} count={players.length} />
      ))}
    </LadderWrapper>
  );
};

export default Ladder;

const Body = styled.tbody`
  width: ${({ count }) => `calc(100% / ${count})`};
  border-left: 3px solid black;
  border-right: 3px solid black;
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
