import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const CounterButton = ({
  playerCount,
  direction,
  increasePlayers,
  decreasePlayers,
}) => {
  return (
    <>
      {direction === "left" ? (
        <Button
          aria-label="플레이어 수 감소"
          onClick={decreasePlayers}
          disabled={playerCount <= 2}
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            color={playerCount < 3 ? "lightgray" : "orange"}
          />
        </Button>
      ) : (
        <Button
          aria-label="플레이어 수 증가"
          onClick={increasePlayers}
          disabled={playerCount >= 10}
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            color={playerCount > 9 ? "lightgray" : "orange"}
          />
        </Button>
      )}
    </>
  );
};

export default CounterButton;

const Button = styled.button`
  font-size: 4rem;

  &:disabled {
    cursor: not-allowed;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 3.5rem;
  }
`;
