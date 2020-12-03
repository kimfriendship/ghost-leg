import React from "react";
import SubButton from "./SubButton";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const RestartButton = () => {
  return <SubButton text="다시 하기" icon={faRedo} />;
};

export default RestartButton;
