import React from "react";
import { MainButton } from "../MainButton";
import { Table } from "../Table/Table";
import { Title, Header } from "./BundleManagement.styled";

export function BundleManagement() {
  return (
    <>
      <Header>
        <Title>Android Bundle Manager</Title>
        <MainButton>CREATE</MainButton>
      </Header>
      <Table />
    </>
  );
}
