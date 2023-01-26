import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isFiveChar = (value) => {
  return value.trim().length === 5;
};
const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid =
      !isEmpty(enteredPostal) && isFiveChar(enteredPostal);

    setFormInputsValidity({
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
      name: enteredNameIsValid,
    });

    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;
    if (!formIsValid) {
      return;
    }
    //submit the form
    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostal,
    });
  };

  const nameClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && <p>Please enter valid email</p>}
      </div>

      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && <p>Please enter valid email</p>}
      </div>

      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputsValidity.postalCode && <p>Please enter valid email</p>}
      </div>

      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && <p>Please enter valid email</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
