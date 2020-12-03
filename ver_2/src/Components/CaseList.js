import React from "react";
import styled from "styled-components";

const Case = ({ idx }) => {
  return (
    <CaseWrapper>
      <CaseInput placeholder={`case ${idx + 1}`} />
    </CaseWrapper>
  );
};

const CaseList = ({ players }) => {
  return (
    <CaseListWrapper>
      {players.map((_, idx) => (
        <Case key={idx} idx={idx} />
      ))}
    </CaseListWrapper>
  );
};

export default CaseList;

const CaseListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 80%;
  background-color: pink;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const CaseWrapper = styled.li`
  width: 20%;
  background-color: wheat;
  padding: 0 0.5%;
`;

const CaseInput = styled.input`
  height: 4rem;
  width: 100%;
  border: 2px solid cornflowerblue;
  border-radius: 5px;
  font-size: 1.6rem;
  text-align: center;

  &::placeholder {
    text-align: center;
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mobile} {
    height: 3rem;
    font-size: 1.4rem;

    &::placeholder {
      font-size: 1.4rem;
    }
  }
`;
