import styled from "styled-components";
import { Theme } from "../../utils";

export const StyledFooter = styled.div`
  background-color: ${Theme.body};
  width: 100vw;
  display: flex;
  flex-wrap: auto;
  align-items: center;
  justify-content: space-around;
  height: ${Theme.footerHeight};
  div {
    color: ${Theme.background};
  }
  z-index: 0;
`;
