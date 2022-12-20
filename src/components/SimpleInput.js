import React from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    reader: nameReader,
    errorInsert: inputInsert,
    checkFirstTouchError,
    dataGet: nameGet,
    lostFocus,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    reader: nameReaderEmail,
    errorInsert: inputInsertEmail,
    checkFirstTouchError: checkFirstTouchErrorEmail,
    dataGet: emailGet,
    lostFocus: lostFocusEmail,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  let fromIsValid = false;

  if (inputInsert && inputInsertEmail) {
    fromIsValid = true;
  }

  const onFromSubmit = (event) => {
    event.preventDefault();

    if (!inputInsert) {
      return;
    }
    if (!inputInsertEmail) {
      return;
    }

    console.log(nameReader);
    resetNameInput();
    resetEmailInput();
  };

  const classChange = checkFirstTouchError
    ? "from-control invalid"
    : "from-control";

  const classChangeEmail = checkFirstTouchErrorEmail
    ? "from-control invalid"
    : "from-control";

  return (
    <form onSubmit={onFromSubmit}>
      <div className={classChange}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameGet}
          value={nameReader}
          onBlur={lostFocus}
        />
      </div>
      {checkFirstTouchError && <p>Please Enter An Input</p>}
      <div className={classChangeEmail}>
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          id="email"
          onChange={emailGet}
          value={nameReaderEmail}
          onBlur={lostFocusEmail}
        />
      </div>
      {checkFirstTouchErrorEmail && <p>Please Enter An Email</p>}
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
