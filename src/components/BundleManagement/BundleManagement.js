import React, { useState } from "react";
import { MainButton } from "../MainButton";
import { Table, Modal } from "../";
import { Title, Header } from "./BundleManagement.styled";

export function BundleManagement() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header>
        <Modal show={showModal} setShow={setShowModal}></Modal>
        <Title>Android Bundle Manager</Title>
        <MainButton
          style={{ alignSelf: "center" }}
          onClick={() => setShowModal(!showModal)}
        >
          CREATE
        </MainButton>
      </Header>
      <Table />
    </>
  );
}
