import styled from "styled-components";
import { Theme } from "../../utils";

export const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const MainCard = styled.div`
  background: ${Theme.backgroundLight};
  box-shadow: ${Theme.shadow};
  border-radius: 5px;
  margin: 29px;
  padding: 24px;
  width: 85%;
  max-width: 1200px;
`;
