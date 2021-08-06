import React from "react";
import { useBundleActions, useBundleState } from "../../context";
import { DataHeader, DataRow } from "./Table.styled";

export function Table() {
  const { selectBundle } = useBundleActions();
  const { bundleList } = useBundleState();

  return (
    <>
      <DataHeader>
        <div>name</div>
        <div>category</div>
        <div>bundle</div>
        <div>company</div>
      </DataHeader>
      {bundleList.map((bundle, index) => (
        <DataRow onClick={() => selectBundle(bundle)} key={index}>
          <div>{bundle.name}</div>
          <div>{bundle.category}</div>
          <div>{bundle.bundle}</div>
          <div>{bundle.company}</div>
        </DataRow>
      ))}
    </>
  );
}
