import styled from "styled-components";
import { Theme } from "../../utils";

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
  width: 600px;
  position: relative;
  height: fit-content;
`;

export const ModalContainer = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: ${Theme.shadow}
  max-height: 80vh;
  overflow-y: auto;
`;
