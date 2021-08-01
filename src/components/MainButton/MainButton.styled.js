import styled from "styled-components";
import { Theme } from "../../utils";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: ${Theme.background};
  background-color: ${(props) =>
    props.secondary ? Theme.secondary : Theme.primary};
  padding: ${(props) => (props.secondary ? "8px 15px" : "12px 30px")};
  transition: all 0.2s ease-in-out;
  &:hover {
    margin-bottom: 5px;
    opacity: 0.6;
  }
`;
