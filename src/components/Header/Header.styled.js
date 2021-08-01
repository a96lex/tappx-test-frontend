import styled from "styled-components";
import { Theme } from "../../utils";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;
