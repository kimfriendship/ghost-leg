import React from "react";
import styled from "styled-components";

const PairGroup = ({ results, players, cases }) => {
  return (
    <Wrapper>
      {players.map((player, idx) => (
        <Pair key={idx}>
          <Image src={player.src} alt={player.name} />
          <Case color={player.color}>{results[idx]}</Case>
        </Pair>
      ))}
    </Wrapper>
  );
};

export default PairGroup;

const Wrapper = styled.ul`
  width: 80%;
  margin: 5rem auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Pair = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 1rem 3rem;

  @media ${({ theme }) => theme.mobile} {
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 70%;
  max-width: 8rem;
  min-width: 4.5rem;
  min-height: 4.5rem;
  object-fit: cover;

  @media ${({ theme }) => theme.mobile} {
    width: 3rem;
    height: 3rem;
  }
`;

const Case = styled.span`
  font-size: 1.8rem;
  color: white;
  background-color: ${({ color }) => color};
  width: 60%;
  height: 5rem;
  line-height: 5rem;
  padding: 0 2rem;
  margin-left: 2rem;
  border-radius: 10px;

  @media ${({ theme }) => theme.mobile} {
    width: 50%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    margin-left: -1rem;
  }
`;
