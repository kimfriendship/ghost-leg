import React from "react";
import styled from "styled-components";

const EnterButton = ({ enterGame }) => {
  return (
    <Button aria-label="게임 입장" onClick={enterGame}>
      ENTER
    </Button>
  );
};

export default React.memo(EnterButton);

const Button = styled.button`
  background-color: #ffdb99;
  font-size: 2.3rem;
  font-weight: 600;
  width: 30rem;
  height: 6rem;
  margin: 15rem auto 0;
  display: block;
  border-radius: 10px;
  transition: 0.2s ease-in;

  &:hover,
  &:focus {
    color: white;
    background-color: orange;
    transition: 0.2s ease-in;
  }

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1.5rem;
    margin: 8rem auto 0;
    height: 5rem;
    width: 20rem;
  }
`;
