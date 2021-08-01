import React from "react";
import { HeaderContainer, StyledLogo, LinkItem } from "./Header.styled";
import logo from "../../assets/logo-web.png";
import { MainButton } from "../MainButton";

export function Header() {
  return (
    <HeaderContainer>
      <StyledLogo src={logo} alt="logo" />
      <LinkItem>advertisers</LinkItem>
      <LinkItem>publishers</LinkItem>
      <LinkItem>performance</LinkItem>
      <MainButton secondary>LOGIN</MainButton>
      <MainButton>JOIN NOW</MainButton>
    </HeaderContainer>
  );
}
