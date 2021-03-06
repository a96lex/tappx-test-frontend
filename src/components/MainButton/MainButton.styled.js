import styled from "styled-components";
import { Theme } from "../../utils";

export const StyledButton = styled.button`
  cursor: pointer;
  min-width: fit-content;
  border: none;
  border-radius: 5px;
  color: ${Theme.backgroundLight};
  background-color: ${(props) =>
    props.secondary ? Theme.secondary : Theme.primary};
  height: fit-content;
  padding: ${(props) => (props.secondary ? "8px 15px" : "12px 30px")};
  transition: all 0.4s ease-in-out;
  &:hover {
    ${(props) =>
      props.secondary
        ? `filter: brightness(150%)`
        : `background-color: ${Theme.primaryLight}`};
  }
`;
