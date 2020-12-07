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

export default React.memo(SubButton);

const Button = styled.button`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  transition: 0.2s ease-in;
  width: 14rem;
  text-align: right;
  border-radius: 5px;

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

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px darkslategrey;
  }
`;

const Text = styled.span`
  color: darkslategrey;
  font-size: inherit;
  margin-right: 1rem;
`;
