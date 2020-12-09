import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle aria-label="랜덤 사다리 타기 홈">
        <HomeLink
          aria-label="홈으로 가기"
          tabIndex="1"
          href="https://kimfriendship.github.io/ghost-leg/"
        >
          랜덤 사다리 타기
        </HomeLink>
      </HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 8rem;
  width: 100vw;
  background-color: #577dc4;

  @media ${({ theme }) => theme.mobile} {
    height: 6rem;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0 auto;
  width: fit-content;
  height: 8rem;

  @media ${({ theme }) => theme.mobile} {
    height: 6rem;
  }
`;

const HomeLink = styled.a`
  color: white;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 8rem;
  padding: 1rem;
  border-radius: 5px;

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 2rem;
    font-weight: 600;
    line-height: 6rem;
  }
`;
