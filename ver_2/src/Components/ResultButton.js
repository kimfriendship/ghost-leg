import React from "react";
import SubButton from "Components/SubButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ResultButton = () => {
  return <SubButton text="전체 결과 보기" icon={faArrowRight} />;
};

export default ResultButton;
