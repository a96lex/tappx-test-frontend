import React, { useEffect, useState } from "react";
import { useBundleActions, useBundleState } from "../../context";
import { MainButton } from "../MainButton";
import { Modal } from "../Modal";

export function BundleModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bundle, setBundle] = useState("");
  const [company, setCompany] = useState("");
  const [active, setActive] = useState("");
  const [category, setCategory] = useState("");

  const [showDelete, setShowDelete] = useState(false);

  const { unSelectBundle, createBundle, deleteBundle } = useBundleActions();
  const { selectedBundle, isCreation } = useBundleState();

  useEffect(() => {
    if (selectedBundle) {
      setName(selectedBundle.name);
      setEmail(selectedBundle.email);
      setBundle(selectedBundle.bundle);
      setCompany(selectedBundle.company);
      setActive(selectedBundle.active);
      setCategory(selectedBundle.category);
    }
  }, [selectedBundle]);

  const handleClose = () => {
    setShowDelete(false);
    unSelectBundle();
  };

  return (
    <Modal close={handleClose} show={selectedBundle}>
      <h2>{isCreation ? "Introduce bundle data" : "Bundle details"}</h2>
      <BundleInput label="Name:" value={name} setValue={setName} />
      <BundleInput label="Email:" value={email} setValue={setEmail} />
      <BundleInput label="Bundle:" value={bundle} setValue={setBundle} />
      <BundleInput label="Company:" value={company} setValue={setCompany} />
      <BundleInput label="Active:" value={active} setValue={setActive} />
      <BundleInput label="Category:" value={category} setValue={setCategory} />
      <MainButton
        secondary={!isCreation}
        onClick={() =>
          isCreation
            ? createBundle({ name, email, bundle, company, active, category })
            : setShowDelete(!showDelete)
        }
      >
        {isCreation ? "CREATE" : showDelete ? "CANCEL" : "DELETE"}
      </MainButton>
      {!isCreation && showDelete && (
        <MainButton onClick={() => deleteBundle()}>
          CONFIRM ELIMINATION
        </MainButton>
      )}
    </Modal>
  );
}

function BundleInput({ label, value, setValue }) {
  return (
    <label>
      {label}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}
