import { useState } from "react";

const useInput = (validateValue) => {
  const [reader, setReader] = useState("");
  const [touch, setTouch] = useState(false);

  const errorInsert = validateValue(reader);
  const checkFirstTouchError = touch && !errorInsert;

  const dataGet = (event) => {
    setReader(event.target.value);
  };
  const lostFocus = (event) => {
    setTouch(true);
  };
  const reset = () => {
    setReader("");
    setTouch(false);
  };

  return {
    reader,
    checkFirstTouchError,
    errorInsert,
    dataGet,
    lostFocus,
    reset,
  };
};

export default useInput;
