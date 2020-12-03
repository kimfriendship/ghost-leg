import React from "react";
import styled from "styled-components";

const Case = ({ idx, inputCase }) => {
  return (
    <CaseWrapper>
      <CaseInput
        placeholder={`case ${idx + 1}`}
        onChange={(e) => inputCase(e, idx)}
      />
    </CaseWrapper>
  );
};

const CaseList = ({ players, inputCase }) => {
  return (
    <CaseListWrapper>
      {players.map((_, idx) => (
        <Case key={idx} idx={idx} inputCase={inputCase} />
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

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const CaseWrapper = styled.li`
  width: 20%;
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
