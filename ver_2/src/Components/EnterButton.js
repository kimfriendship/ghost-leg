import React from "react";
import styled from "styled-components";

const EnterButton = ({ enterGame }) => {
  return (
    <Button aria-label="게임 입장" onClick={enterGame}>
      ENTER
    </Button>
  );
};

export default EnterButton;

const Button = styled.button`
  background-color: rgb(255, 215, 139);
  font-size: 2.3rem;
  font-weight: 600;
  width: 30rem;
  height: 6rem;
  margin: 15rem auto 0;
  display: block;
  border-radius: 10px;
  transition: 0.2s ease-in;

  &:hover {
    color: white;
    background-color: orange;
    transition: 0.2s ease-in;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1.5rem;
    margin: 8rem auto 0;
    height: 5rem;
    width: 20rem;
  }
`;
