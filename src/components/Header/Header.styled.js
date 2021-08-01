import styled from "styled-components";
import { Theme, widthTreshold } from "../../utils";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  height: 70px;
`;

export const StyledLogo = styled.img`
  height: 43px;
  width: 147px;
`;

export const LinkItem = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  color: ${Theme.bodyLight};
  font-size: ${Theme.fonts.medium};
  &:hover {
    color: ${Theme.body};
  }
  @media (max-width: ${widthTreshold}) {
    color: ${Theme.background} !important;
  }
`;

export const MenuContainer = styled.div`
  transition: all 0.5s ease-in-out;
  @media (max-width: ${widthTreshold}) {
    background-color: ${Theme.body};
    height: ${(props) => (props.show ? `100vh` : `0px`)};
    opacity: ${(props) => (props.show ? `1` : `0`)};
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    div {
      display: ${(props) => (props.show ? `flex` : `none`)};
      flex-direction: column;
      width: 100%;
      height: 100vh;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  @media (min-width: ${widthTreshold}) {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0px 10px;
      img {
        display: none;
      }
      button {
        margin: 0px 10px;
      }
    }
  }
`;

export const MenuToggle = styled.button`
  @media (min-width: ${widthTreshold}) {
    display: none;
  }
  color: ${Theme.primary};
  font-size: 40px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;
