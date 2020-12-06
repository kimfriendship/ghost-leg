import React from "react";
import styled from "styled-components";

const ResultTitle = () => {
  return <Title>전체 결과</Title>;
};

export default ResultTitle;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3rem;
  margin-top: 5rem;
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
    margin-top: 3rem;
    font-size: 1.8rem;
  }
`;
