import styled from "styled-components";
import { Theme } from "../../utils";

export const StyledFooter = styled.div`
  background-color: ${Theme.body};
  width: 100vw;
  height: ${Theme.footerHeight};
  display: flex;
  flex-wrap: auto;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  div {
    width: 100%;
    display: flex;
    flex-wrap: auto;
    align-items: center;
    justify-content: space-around;
    color: ${Theme.background};
  }
  z-index: 0;
`;
