import React, { useState } from "react";
import {
  HeaderContainer,
  StyledLogo,
  LinkItem,
  MenuContainer,
  MenuToggle,
} from "./Header.styled";
import logo from "../../assets/logo-web.png";
import { MainButton } from "../MainButton";

export function Header() {
  return (
    <HeaderContainer>
      <StyledLogo src={logo} alt="logo" />
      <HeaderModal />
    </HeaderContainer>
  );
}

function HeaderModal() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <MenuContainer show={show}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifySelf: "flex-start",
            }}
          >
            <StyledLogo src={logo} alt="logo" />
            <MenuToggle onClick={() => setShow(!show)}>X</MenuToggle>
          </div>
          <LinkItem>advertisers</LinkItem>
          <LinkItem>publishers</LinkItem>
          <LinkItem>performance</LinkItem>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <MainButton secondary>LOGIN</MainButton>
            <MainButton>JOIN NOW</MainButton>
          </div>
        </div>
      </MenuContainer>
      <MenuToggle onClick={() => setShow(!show)}>=</MenuToggle>
    </div>
  );
}
