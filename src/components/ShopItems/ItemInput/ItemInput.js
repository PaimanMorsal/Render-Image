import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styled from "./ItemInput.module.css";

const ItemInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const itemInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styled["form-control"]} ${!isValid && styled.invalid}`}
      >
        <label>Shopping Item</label>
        <input type="text" onChange={itemInputChangeHandler} />
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default ItemInput;

// style={{ color: !isValid ? "red" : "black" }
// style={{
//   background: !isValid ? "salmon" : "transparent",
//   borderColor: !isValid ? "red" : "black",
// }}
