import styled from "styled-components";
import { Theme } from "../../utils";

export const StyledLabel = styled.div`
  font-size: ${Theme.fonts.medium};
  width: 100%;
  text-align: ${(props) => (props.leftAligned ? "left" : "center")};
  span {
    color: ${Theme.primary};
  }
`;

export const StyledInputContainer = styled.div`
  padding: 10px;
  width: ${(props) => (props.textInput ? 400 : 100)}px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: calc(100% - 20px);
`;
