import styled from "styled-components";
import { Theme } from "../../utils";

const headerOffset = 70;

export const AppLayout = styled.div`
  width: 100vw;
  min-height: calc(100vh - ${headerOffset}px);
  background-color: ${Theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${headerOffset}px;
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
