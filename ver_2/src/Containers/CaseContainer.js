import Case from "Components/Case";
import React, { useContext } from "react";
import { Context } from "Context";

const CaseContainer = () => {
  const { state } = useContext(Context);
  const { players } = state;

  return (
    <>
      {players.map((player, idx) => (
        <Case key={idx} num={player.id} idx={idx} />
      ))}
    </>
  );
};

export default CaseContainer;
