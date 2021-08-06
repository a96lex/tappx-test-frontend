import React, { useEffect, useState } from "react";
import { useBundleActions, useBundleState } from "../../context";
import { bundleRegex, emailRegex } from "../../utils";
import { MainButton } from "../MainButton";
import { Modal } from "../Modal";

const categoryOptions = ["tool", "music", "game", "social"];

export function BundleModal() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [bundle, setBundle] = useState("");
  // const [company, setCompany] = useState("");
  // const [active, setActive] = useState(0);
  // const [category, setCategory] = useState(categoryOptions[0]);
  const [name, setName] = useState("alex");
  const [email, setEmail] = useState("alex@loves.cris");
  const [bundle, setBundle] = useState("alex.loves.cris");
  const [company, setCompany] = useState("alex");
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
      console.log({ isCreation });
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

  const checkErrors = () => {
    let nameCheck = "";
    let emailCheck = "";
    let bundleCheck = "";
    let companyCheck = "";

    if (name == "") {
      nameCheck = "Please enter a name";
    }
    if (!emailRegex.test(email)) {
      emailCheck = "Please check your email adress";
    }
    if (!bundleRegex.test(bundle)) {
      bundleCheck = "Please check your bundle";
    }
    if (company == "") {
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
    console.log({ error, nameError });
    if (!checkErrors()) {
      console.log("no errores");
      createBundle({
        name,
        email,
        bundle,
        company,
        active,
        category,
      });
    }
  };

  return (
    <Modal close={handleClose} show={selectedBundle}>
      <h2>{isCreation ? "Introduce bundle data" : "Bundle details"}</h2>
      <BundleInputText
        label="Name:"
        value={name}
        setValue={setName}
        error={nameError}
        setError={setNameError}
      />
      <BundleInputText
        label="Email:"
        value={email}
        setValue={setEmail}
        error={emailError}
        setError={setEmailError}
      />
      <BundleInputText
        label="Bundle:"
        value={bundle}
        setValue={setBundle}
        error={bundleError}
        setError={setBundleError}
      />
      <BundleInputText
        label="Company:"
        value={company}
        setValue={setCompany}
        error={companyError}
        setError={setCompanyError}
      />
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
      <MainButton
        secondary={!isCreation}
        onClick={() =>
          isCreation ? handleCreate() : setShowDelete(!showDelete)
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

function BundleInputText({ label, value, setValue, error = "", setError }) {
  return (
    <>
      <div>
        {label} <span style={{ color: "red" }}>{error}</span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError && setError(null);
        }}
      />
    </>
  );
}

function BundleInputCheckbox({ label, value, setValue }) {
  return (
    <>
      <div>{label}</div>
      <input
        type="checkbox"
        value={value}
        onChange={() => {
          setValue(Math.abs(value - 1));
        }}
      />
    </>
  );
}

function BundleInputDropdown({ label, value, setValue, options = [] }) {
  return (
    <>
      <div>{label}</div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ textTransform: "capitalize" }}
      >
        {options.map((option, index) => (
          <option
            name={option}
            key={index}
            style={{ textTransform: "capitalize" }}
          >
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
