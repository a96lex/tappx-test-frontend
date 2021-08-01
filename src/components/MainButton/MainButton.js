import React from "react";
import { StyledButton } from "./MainButton.styled";

export function MainButton({ children, secondary = false }) {
  return <StyledButton secondary={secondary}>{children}</StyledButton>;
}
