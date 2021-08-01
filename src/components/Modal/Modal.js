import React from "react";
import {
  ModalContainer,
  ModalBg,
  ModalLayoutHelper,
  ModalToggle,
} from "./Modal.styled";

export const Modal = ({ show, children, setShow }) => {
  if (!show) return null;
  return (
    <ModalBg>
      <ModalLayoutHelper>
        <ModalContainer>
          <ModalToggle onClick={() => setShow(false)}>X</ModalToggle>
          {children}
        </ModalContainer>
      </ModalLayoutHelper>
    </ModalBg>
  );
};
