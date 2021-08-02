import React from "react";
import { MainButton } from "../MainButton";
import { Table } from "../";
import { Title, Header } from "./BundleManagement.styled";
import { useBundleActions } from "../../context";
import { BundleModal } from "../BundleModal";

export function BundleManagement() {
  const { selectBundle } = useBundleActions();

  return (
    <>
      <Header>
        <BundleModal />
        <Title>Android Bundle Manager</Title>
        <MainButton
          style={{ alignSelf: "center" }}
          onClick={() => selectBundle()}
        >
          CREATE
        </MainButton>
      </Header>
      <Table />
    </>
  );
}
