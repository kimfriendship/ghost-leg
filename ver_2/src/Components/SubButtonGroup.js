import React from "react";
import HomeButton from "./HomeButton";
import RestartButton from "./RestartButton";
import ResultButton from "./ResultButton";
import styled from "styled-components";

const SubButtonGroup = () => {
  return (
    <Wrapper>
      <HomeButton />
      <ResultButton />
      <RestartButton />
    </Wrapper>
  );
};

export default SubButtonGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10%;
  margin-top: 5rem;
`;
