/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import A11yTitle from "./A11yTitle";

const Players = ({ players }) => {
  const height = (window.innerHeight * 0.8) / players.length;
  // console.log(
  //   "players rendering",
  //   players.map((p) => p.name)
  // );
  return (
    <>
      <A11yTitle element="h3" text="플레이어 목록" />
      <PlayerList height={height}>
        {players.map(({ id, name, src }) => (
          <Player key={id} height={height}>
            <PlayerImg src={src} alt={`${name} 플레이어`} />
          </Player>
        ))}
      </PlayerList>
    </>
  );
};

export default React.memo(Players);

const PlayerList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 8rem;
  width: 80%;
  height: ${({ height }) => height};

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    margin-top: 7rem;
  }
`;

const Player = styled.li`
  width: 20%;
  height: ${({ height }) => height};
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
