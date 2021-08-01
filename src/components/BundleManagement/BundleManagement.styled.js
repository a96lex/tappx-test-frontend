import styled from "styled-components";
import { Theme } from "../../utils";

export const Title = styled.div`
  color: ${Theme.body};
  font-size: ${Theme.fonts.large};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
