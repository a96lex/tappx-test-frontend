import React from "react";
import {
  StyledLabel,
  StyledInputContainer,
  StyledInput,
} from "./inputComponents.styled";

export function BundleInputText({
  label,
  value,
  placeholder = "",
  setValue,
  error = "",
  setError,
}) {
  return (
    <StyledInputContainer textInput>
      <StyledLabel leftAligned>
        {label} <span>{error}</span>
      </StyledLabel>
      <StyledInput
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError && setError(null);
        }}
      />
    </StyledInputContainer>
  );
}

export function BundleInputCheckbox({ label, value, setValue }) {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <input
        type="checkbox"
        value={value}
        onChange={() => {
          setValue(Math.abs(value - 1));
        }}
      />
    </StyledInputContainer>
  );
}

export function BundleInputDropdown({ label, value, setValue, options = [] }) {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ textTransform: "capitalize" }}
      >
        {options.map((option, index) => (
          <option
            name={option}
            key={index}
            style={{ textTransform: "capitalize" }}
          >
            {option}
          </option>
        ))}
      </select>
    </StyledInputContainer>
  );
}
