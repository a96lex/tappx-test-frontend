import styled from "styled-components";
import { Theme, widthTreshold } from "../../utils";

export const ModalBg = styled.div`
  position: fixed;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(5, 20, 50, 0.4);
`;

export const ModalLayoutHelper = styled.div`
  position: relative;
  height: fit-content;
  @media (max-width: ${widthTreshold}) {
    height: 100%;
    width: 100%;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 500px;
  background: ${Theme.backgroundLight};
  border-radius: 8px;
  box-shadow: ${Theme.shadow}
  overflow-y: auto;
  height: 100%;width: 100%

`;

export const ModalToggle = styled.button`
  position: absolute;
  top: -70px;
  right: -80px;
  @media (max-width: ${widthTreshold}) {
    top: 20px;
    right: 20px;
  }
  color: ${Theme.primary};
  font-size: 40px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;
