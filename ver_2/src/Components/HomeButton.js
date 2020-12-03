import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SubButton from "./SubButton";

const HomeButton = () => {
  return <SubButton text="처음으로" icon={faArrowLeft} />;
};

export default HomeButton;
