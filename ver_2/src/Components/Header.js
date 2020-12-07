import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <HomeLink href="http://localhost:3000/">랜덤 사다리 타기</HomeLink>
      </HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 8rem;
  width: 100vw;
  background-color: cornflowerblue;

  @media ${({ theme }) => theme.mobile} {
    height: 4rem;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0 auto;
  width: fit-content;
  height: 8rem;

  @media ${({ theme }) => theme.mobile} {
    height: 4rem;
  }
`;

const HomeLink = styled.a`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  line-height: 8rem;
  padding: 1rem;
  border-radius: 5px;

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 2rem;
    font-weight: 700;
    line-height: 4rem;
  }
`;
