import React from "react";
import { helperData } from "../../utils";
import { DataHeader, DataRow } from "./Table.styled";

export function Table() {
  return (
    <>
      <DataHeader>
        <div>name</div>
        <div>category</div>
        <div>bundle</div>
        <div>company</div>
      </DataHeader>
      {helperData
        .concat(helperData)
        .concat(helperData)
        .concat(helperData)
        .map((b) => (
          <DataRow>
            <div>{b.name}</div>
            <div>{b.category}</div>
            <div>{b.bundle}</div>
            <div>{b.company}</div>
          </DataRow>
        ))}
    </>
  );
}
