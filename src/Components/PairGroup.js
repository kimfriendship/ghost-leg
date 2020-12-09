import React from "react";
import styled from "styled-components";
import A11yTitle from "./A11yTitle";

const PairGroup = ({ results, players, cases }) => {
  return (
    <>
      <A11yTitle element="h3" text="플레이어별 결과 리스트" />
      <Wrapper>
        {players.map((player, idx) => (
          <Pair key={idx}>
            <Image src={player.src} alt={`${player.name} 플레이어`} />
            <Case color={player.color}>{cases[results[idx]]}</Case>
          </Pair>
        ))}
      </Wrapper>
    </>
  );
};

export default PairGroup;

const Wrapper = styled.ul`
  width: 70%;
  max-width: 90rem;
  margin: 5rem auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.mobile} {
    margin-top: 2rem;
    width: 100%;
  }
`;

const Pair = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 1rem 3rem;

  @media ${({ theme }) => theme.mobile} {
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 30%;
  max-width: 8rem;
  min-width: 4.5rem;
  min-height: 4.5rem;
  object-fit: cover;

  @media ${({ theme }) => theme.mobile} {
    max-width: 6rem;
    width: 30%;
  }
`;

const Case = styled.span`
  font-size: 1.8rem;
  color: white;
  background-color: ${({ color }) => color};
  width: 60%;
  height: 5rem;
  line-height: 5rem;
  max-width: 20rem;
  padding: 0 1rem;
  margin-left: 2rem;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${({ theme }) => theme.mobile} {
    width: 50%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;
