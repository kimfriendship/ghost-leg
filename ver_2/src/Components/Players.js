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
  justify-content: space-between;
  margin: 5rem auto 0;
  width: 90%;
  background-color: green;
`;

const Player = styled.li``;

const PlayerImg = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;

  @media ${({ theme }) => theme.mobile} {
    width: 3rem;
    height: 3rem;
  }
`;
