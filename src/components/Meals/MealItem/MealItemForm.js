import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = parseInt(amountInputRef.current.value);
    
    if (
      enteredAmount < 1 ||
      enteredAmount > 5 ||
      enteredAmount.toString.length == 0
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addToCartHandler(enteredAmount)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Pleseenter a valid amoubt</p>}
    </form>
  );
};

export default MealItemForm;
