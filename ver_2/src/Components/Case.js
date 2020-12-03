import React from "react";
import styled from "styled-components";

const Case = ({ num, idx }) => {
  return <CaseInput placeholder={`case${idx + 1}`}></CaseInput>;
};

export default Case;

const CaseInput = styled.input`
  height: 4rem;
  width: 10rem;
  border: 2px solid cornflowerblue;
  border-radius: 5px;

  &::placeholder {
    text-align: center;
    font-size: 1.6rem;
  }
`;
