import React from "react";
import styled from "styled-components";

const Partition = ({ gameState, playGame }) => {
  return (
    <>
      <Shade>
        {gameState === "setting" ? (
          <SettingMessage>케이스를 입력해주세요</SettingMessage>
        ) : (
          <StartButton aria-label="게임 시작">START</StartButton>
        )}
      </Shade>
    </>
  );
};

export default Partition;

const StartButton = styled.button`
  font-size: 5rem;
  font-weight: 600;
  color: white;
  background-color: orange;
  width: 25rem;
  height: 10rem;
  border-radius: 10px;
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-in;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 2rem;
    width: 10rem;
    height: 5rem;
  }
`;

const SettingMessage = styled.h2`
  font-size: 2.5rem;
  color: darkslategrey;

  @media ${({ theme }) => theme.mobile} {
    font-size: 1.5rem;
  }
`;

const Shade = styled.div`
  width: 80%;
  height: 42rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgoldenrodyellow;

  @media ${({ theme }) => theme.mobile} {
    height: 12rem;
    margin: 1rem auto;
  }
`;
