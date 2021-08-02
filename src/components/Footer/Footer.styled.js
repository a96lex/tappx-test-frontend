import styled from "styled-components";
import { Theme } from "../../utils";

export const StyledFooter = styled.div`
  background-color: ${Theme.body};
  bottom: 0px;
  width: 100vw;
  position: fixed;
  display: flex;
  flex-wrap: auto;
  align-items: center;
  justify-content: space-around;
  min-height: 10vh;
  div {
    color: ${Theme.background};
  }
`;