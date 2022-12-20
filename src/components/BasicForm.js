import React from "react";
import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const firstName = (value) => value.trim() !== "";
  // const lastName = (value) => value.trim !== "";
  // const email = (value) => value.includes("@");
  const {
    reader: firstNameRead,
    errorInsert: firstinputInsert,
    checkFirstTouchError: firstTouch,
    dataGet: getFirstName,
    lostFocus: firstblurFocus,
    reset: firstReset,
  } = useInput(firstName);

  let fromIsValid = false;
  if (firstinputInsert) {
    fromIsValid = true;
  }
  const fromSubmit = (event) => {
    event.preventDefault();
    if (!firstinputInsert) {
      return;
    }
    firstReset();
  };

  const firstClass = firstTouch ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={fromSubmit}>
      <div className="control-group">
        <div className={firstClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameRead}
            onChange={getFirstName}
            onBlur={firstblurFocus}
          />
          {firstTouch && <p>Please Enter Your First Name</p>}
        </div>

        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
