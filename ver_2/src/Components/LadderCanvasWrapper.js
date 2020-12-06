import LadderContainer from "Containers/LadderContainer";
import React from "react";
import styled from "styled-components";

const LadderCanvasWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LadderCanvasWrapper;

const Wrapper = styled.div`
  /* background-color: lightblue;
  opacity: 0.4; */
  position: relative;
  width: 80%;
  height: 42rem;
  margin: 2rem auto;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    height: 12rem;
    margin: 1rem auto;
  }
`;
