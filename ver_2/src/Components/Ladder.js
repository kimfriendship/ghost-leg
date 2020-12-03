import React from "react";
import styled from "styled-components";

const LadderStick = () => {
  return <Stick />;
};

const Ladder = ({ players, gameState }) => {
  return (
    <LadderWrapper>
      {players.map((_, idx) => (
        <LadderStick key={idx} />
      ))}
    </LadderWrapper>
  );
};

export default Ladder;

const Stick = styled.div`
  width: 0.8rem;
  height: 40rem;
  margin: 1rem 0;
  background-color: black;

  @media ${({ theme }) => theme.mobile} {
    width: 0.5rem;
    height: 10rem;
  }
`;

const LadderWrapper = styled.div`
  width: 80%;
  height: 42rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    height: 12rem;
    margin: 1rem auto;
  }
`;
