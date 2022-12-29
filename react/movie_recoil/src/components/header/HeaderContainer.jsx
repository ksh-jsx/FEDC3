import React from "react";
import SearchBar from "./SearchBar";
import styled from "@emotion/styled";

const HeaderContainer = () => {
  return (
    <Header>
      <Logo>
        <Gif />
        <h1>Movie</h1>
      </Logo>
      <SearchBar />
    </Header>
  );
};

export default HeaderContainer;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 50px 20px;
`;

const Logo = styled.div`
  font-size: 40px;
  color: var(--white);
  padding-right: 30px;
  display: flex;
  align-items: center;

  & > h1 {
    font-size: 35px;
  }
`;

const Gif = styled.div`
  width: 80px;
  padding-top: 100px;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/349115/like_animation.png) 0 0
    no-repeat;
  background-size: 3000%;
  animation: like-gif steps(28) 1s infinite both;

  @keyframes like-gif {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
`;
