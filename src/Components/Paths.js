import React from "react";
import styled from "styled-components";

const Paths = ({ player, coords }) => {
  // console.log(player.name, coords);
  return (
    <>
      {/* <Image
        src={player.src}
        alt={`${player.name} 사다리 타고 내려가는 중`}
        color={player.color}
        x={coords[0]}
        y={coords[1]}
      /> */}
    </>
  );
};

export default React.memo(Paths);

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  background-color: white;
  padding: 0.3rem;
  border: ${({ color }) => `3px solid ${color}`};
  border-radius: 50%;
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
`;
