import React from "react";
import styled from "styled-components";
import A11yTitle from "./A11yTitle";

const Main = ({ page, gameState, children }) => {
  let text = page === "home" && "홈페이지: 플레이어 수 설정";
  if (page === "game")
    text =
      gameState === "playing" || gameState === "done"
        ? "게임 페이지: 사다리 타기"
        : "게임 페이지: 케이스 설정";

  return (
    <Wrapper>
      {page !== "result" && <A11yTitle element="h2" text={text} />}
      {children}
    </Wrapper>
  );
};

export default React.memo(Main);

const Wrapper = styled.main`
  width: 100vw;
  height: 80vh;
  position: relative;
`;
