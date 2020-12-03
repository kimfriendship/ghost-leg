import React from "react";
import styled from "styled-components";

const StartButton = ({ startGame }) => {
  return (
    <Button aria-label="게임 시작" onClick={startGame}>
      START
    </Button>
  );
};

export default StartButton;

const Button = styled.button`
  background-color: rgb(255, 215, 139);
  font-size: 2.3rem;
  font-weight: 600;
  width: 25rem;
  height: 5rem;
  margin: 15rem auto 0;
  display: block;
  border-radius: 10px;
  transition: 0.2s ease-in;

  &:hover {
    color: white;
    background-color: orange;
    transition: 0.2s ease-in;
  }
`;
