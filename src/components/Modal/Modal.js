import React from "react";
import { MenuToggle } from "../Header/Header.styled";
import { ModalContainer, ModalBg, ModalLayoutHelper } from "./Modal.styled";

export const Modal = ({ show, children, setShow }) => {
  if (!show) return null;
  return (
    <ModalBg>
      <ModalLayoutHelper>
        <MenuToggle onClick={() => setShow(false)}>X</MenuToggle>
        <ModalContainer>{children}</ModalContainer>
      </ModalLayoutHelper>
    </ModalBg>
  );
};
