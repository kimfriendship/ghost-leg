import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubButton = ({ text, icon, label, event }) => {
  return (
    <Button aria-label={label} onClick={event}>
      <Text>{text}</Text>
      <FontAwesomeIcon icon={icon} color="darkslategrey" />
    </Button>
  );
};

export default SubButton;

const Button = styled.button`
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  transition: 0.2s ease-in;
  width: 14rem;
  text-align: right;

  &:hover {
    transition: 0.2s ease-in;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1.4rem;
    width: 13rem;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
  }
`;

const Text = styled.span`
  color: darkslategrey;
  font-size: inherit;
  margin-right: 1rem;
`;
