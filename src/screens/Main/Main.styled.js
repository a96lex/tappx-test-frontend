import styled from "styled-components";
import { Theme } from "../../utils";

export const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
