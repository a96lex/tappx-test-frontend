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
  cursor: pointer;
  background: ${Theme.background};
  div {
    width: ${(props) => (props.columns ? `${100 / props.columns}%` : "25%")};
    overflow: hidden;
    padding: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover {
    background: ${Theme.secondaryLight};
  }
`;

export const Code = styled.div`
  width: 500px;
  background: #f5f6fa;
  border-radius: 5px;
  padding: 12px;
  border-bottom: 3px solid #dfdfdf;
  div {
    font-family: Ubuntu Mono;
    text-align: left;
    word-break: break-all;
  }
`;