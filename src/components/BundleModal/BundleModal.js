import React, { useEffect, useState } from "react";
import { useBundleActions, useBundleState } from "../../context";
import { bundleRegex, emailRegex } from "../../utils";
import { MainButton } from "../MainButton";
import { Modal } from "../Modal";
import { BundleInputText, BundleInputCheckbox, BundleInputDropdown } from "..";

const categoryOptions = ["tool", "music", "game", "social"];

export function BundleModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bundle, setBundle] = useState("");
  const [company, setCompany] = useState("");
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState(categoryOptions[0]);

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [bundleError, setBundleError] = useState(null);
  const [companyError, setCompanyError] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  const { unSelectBundle, createBundle, deleteBundle } = useBundleActions();
  const { selectedBundle, isCreation } = useBundleState();

  useEffect(() => {
    if (selectedBundle && !isCreation) {
      setName(selectedBundle.name);
      setEmail(selectedBundle.email);
      setBundle(selectedBundle.bundle);
      setCompany(selectedBundle.company);
      setActive(selectedBundle.active);
      setCategory(selectedBundle.category);
    }
  }, [selectedBundle]);

  const checkErrors = () => {
    let nameCheck = "";
    let emailCheck = "";
    let bundleCheck = "";
    let companyCheck = "";

    if (name === "") {
      nameCheck = "Please enter a name";
    }
    if (!emailRegex.test(email)) {
      emailCheck = "Please check your email adress";
    }
    if (!bundleRegex.test(bundle)) {
      bundleCheck = "Please check your bundle";
    }
    if (company === "") {
      companyCheck = "Please enter a company";
    }
    setNameError(nameCheck);
    setEmailError(emailCheck);
    setBundleError(bundleCheck);
    setCompanyError(companyCheck);

    return nameCheck || emailCheck || bundleCheck || companyCheck;
  };

  const handleCreate = () => {
    const error = checkErrors();
    if (!error) {
      createBundle({
        name,
        email,
        bundle,
        company,
        active,
        category,
      });
      setName("");
      setEmail("");
      setBundle("");
      setCompany("");
      setActive(0);
      setCategory(categoryOptions[0]);
    }
  };

  const handleUpdate = () => {
    const error = checkErrors();
    if (!error) {
      createBundle({
        id: selectedBundle.id,
        name,
        email,
        bundle,
        company,
        active,
        category,
      });
    }
  };

  const handleDelete = () => {
    deleteBundle(selectedBundle.id);
    setShowDelete(false);
  };

  return (
    <Modal close={unSelectBundle} show={selectedBundle}>
      <h2>{isCreation ? "Introduce bundle data" : "Bundle details"}</h2>
      <BundleInputText
        label="Name:"
        value={name}
        placeholder="Enter your name"
        setValue={setName}
        error={nameError}
        setError={setNameError}
      />
      <BundleInputText
        label="Email:"
        value={email}
        placeholder="Enter your email"
        setValue={setEmail}
        error={emailError}
        setError={setEmailError}
      />
      <BundleInputText
        label="Bundle:"
        value={bundle}
        placeholder="Enter your bundle"
        setValue={setBundle}
        error={bundleError}
        setError={setBundleError}
      />
      <BundleInputText
        label="Company:"
        value={company}
        placeholder="Enter your company"
        setValue={setCompany}
        error={companyError}
        setError={setCompanyError}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BundleInputCheckbox
          label="Active:"
          value={active}
          setValue={setActive}
        />

        <BundleInputDropdown
          label="Category:"
          value={category}
          setValue={setCategory}
          options={categoryOptions}
        />
      </div>
      <MainButton
        onClick={() => (isCreation ? handleCreate() : handleUpdate())}
      >
        {isCreation ? "CREATE" : "UPDATE"}
      </MainButton>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {!isCreation && (
          <>
            <MainButton secondary onClick={() => setShowDelete(!showDelete)}>
              {showDelete ? "CANCEL" : "DELETE"}
            </MainButton>
            <MainButton
              onClick={() => handleDelete()}
              disabled={!showDelete}
              style={
                showDelete
                  ? { minWidth: 0, marginLeft: 10 }
                  : {
                      width: 0,
                      minWidth: 0,
                      paddingLeft: 0,
                      paddingRight: 0,
                      whiteSpace: "nowrap",
                    }
              }
            >
              CONFIRM ELIMINATION
            </MainButton>
          </>
        )}
      </div>
    </Modal>
  );
}
