import styled from "styled-components";
import { Theme } from "../../utils";

export const DataHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 5px;
  div {
    width: ${(props) => (props.columns ? `${100 / props.columns}%` : "25%")};
    padding: 8px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const DataRow = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 5px;
  background: ${Theme.background};
  div {
    width: ${(props) => (props.columns ? `${100 / props.columns}%` : "25%")};
    overflow: hidden;
    padding: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ${(props) =>
    !props.emptyArray
      ? `&:hover {
    background: ${Theme.secondaryLight};
    cursor: pointer;
  }`
      : `justify-content:center; font-size: ${Theme.fonts.medium};padding: 40px`}
`;
