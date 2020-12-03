import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const CounterButton = ({ direction }) => {
  return (
    <Button
      aria-label={`플레이어 수 ${direction === "left" ? "감소" : "증가"}`}
    >
      <FontAwesomeIcon
        icon={
          direction === "left" ? faArrowAltCircleLeft : faArrowAltCircleRight
        }
        color={"orange"}
      />
    </Button>
  );
};

export default CounterButton;

const Button = styled.button`
  font-size: 4rem;
`;
