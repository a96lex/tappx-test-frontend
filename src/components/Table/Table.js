import React from "react";
import { useBundleActions } from "../../context";
import { helperData } from "../../utils";
import { DataHeader, DataRow } from "./Table.styled";

export function Table() {
  const { selectBundle } = useBundleActions();
  return (
    <>
      <DataHeader>
        <div>name</div>
        <div>category</div>
        <div>bundle</div>
        <div>company</div>
      </DataHeader>
      {helperData.map((b, i) => (
        <DataRow onClick={() => selectBundle(b)} key={i}>
          <div>{b.name}</div>
          <div>{b.category}</div>
          <div>{b.bundle}</div>
          <div>{b.company}</div>
        </DataRow>
      ))}
    </>
  );
}
