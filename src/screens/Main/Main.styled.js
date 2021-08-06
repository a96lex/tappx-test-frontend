import styled from "styled-components";
import { Theme } from "../../utils";

export const AppLayout = styled.div`
  width: 100vw;
  min-height: calc(100vh - ${Theme.headerHeight} - ${Theme.footerHeight});
  background-color: ${Theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${Theme.headerHeight};
  padding-bottom: ${Theme.footerHeight};
  overflow-y: scroll;
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
