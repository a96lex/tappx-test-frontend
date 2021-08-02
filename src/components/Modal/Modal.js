import React from "react";
import {
  ModalContainer,
  ModalBg,
  ModalLayoutHelper,
  ModalToggle,
} from "./Modal.styled";

export const Modal = ({ show, children, close }) => {
  if (!show) return null;
  return (
    <ModalBg>
      <ModalLayoutHelper>
        <ModalContainer>
          <ModalToggle onClick={() => close()}>X</ModalToggle>
          {children}
        </ModalContainer>
      </ModalLayoutHelper>
    </ModalBg>
  );
};
