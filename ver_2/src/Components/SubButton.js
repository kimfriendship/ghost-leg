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
  font-size: 1.6rem;
  transition: 0.2s ease-in;
  background-color: pink;
  width: 15rem;
  text-align: right;

  &:hover {
    transition: 0.2s ease-in;
    transform: scale(1.1);
  }
`;

const Text = styled.span`
  color: darkslategrey;
  font-size: 1.6rem;
  margin-right: 1rem;
`;
