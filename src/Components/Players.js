import React from "react";
import styled from "styled-components";

const Players = ({ players }) => {
  return (
    <PlayerList>
      {players.map(({ id, name, src }) => (
        <Player key={id}>
          <PlayerImg src={src} alt={`${name} 플레이어`} />
        </Player>
      ))}
    </PlayerList>
  );
};

export default React.memo(Players);

const PlayerList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 8rem;
  width: 80%;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    padding-top: 7rem;
  }
`;

const Player = styled.li`
  width: 20%;
`;

const PlayerImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 70%;
  min-height: 3rem;
  min-width: 3rem;
  max-width: 8rem;
  object-fit: cover;
`;
