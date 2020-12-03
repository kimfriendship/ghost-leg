import React from "react";
import styled from "styled-components";
import CounterButton from "Components/CounterButton";

const Counter = () => {
  return (
    <CounterWrapper>
      <CounterButton direction="left" />
      <Players>2</Players>
      <CounterButton direction="right" />
    </CounterWrapper>
  );
};

export default Counter;

const Players = styled.span`
  font-size: 6rem;
  font-weight: 700;
  padding: 0 5rem 0.5rem;
`;

const CounterWrapper = styled.div`
  margin: 20vh auto 0;
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mobile} {
    margin: 25vh auto 0;
    width: 25rem;
  }
`;
