import React from "react";
import styled from "styled-components";

const Players = ({ players }) => {
  return (
    <PlayerList>
      {players.map(({ id, name, src }) => (
        <Player key={id}>
          <PlayerImg src={src} alt={name} />
        </Player>
      ))}
    </PlayerList>
  );
};

export default Players;

const PlayerList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 8rem auto 0;
  width: 80%;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    margin: 2rem auto 0;
  }
`;

const Player = styled.li`
  background-color: pink;
  width: 20%;
`;

const PlayerImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 70%;
  min-height: 4.5rem;
  min-width: 4.5rem;
  max-width: 8rem;
  object-fit: cover;
  background-color: yellow;

  @media ${({ theme }) => theme.mobile} {
    width: 3rem;
    height: 3rem;
  }
`;
