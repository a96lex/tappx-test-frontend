import React from "react";
import { StyledButton } from "./MainButton.styled";

export function MainButton({
  children,
  secondary = false,
  onClick,
  style = {},
}) {
  return (
    <StyledButton secondary={secondary} onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
}
