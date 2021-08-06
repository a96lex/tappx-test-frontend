import React from "react";
import { useBundleActions, useBundleState } from "../../context";
import { DataHeader, DataRow } from "./Table.styled";

export function Table() {
  const { selectBundle } = useBundleActions();
  const { bundleList, getBundleLoading } = useBundleState();

  return (
    <>
      <DataHeader>
        <div>name</div>
        <div>category</div>
        <div>bundle</div>
        <div>company</div>
      </DataHeader>
      {bundleList.length > 0 ? (
        bundleList.map((bundle, index) => (
          <DataRow onClick={() => selectBundle(bundle)} key={index}>
            <div>{bundle.username}</div>
            <div>{bundle.category}</div>
            <div>{bundle.bundle}</div>
            <div>{bundle.company}</div>
          </DataRow>
        ))
      ) : (
        <DataRow columns={1} style={{ textAlign: "center" }} emptyArray>
          {getBundleLoading
            ? "Loading..."
            : "There are no bundles to show. Create one!"}
        </DataRow>
      )}
    </>
  );
}
