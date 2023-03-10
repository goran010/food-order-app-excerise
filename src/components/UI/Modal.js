import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart} />;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        document.getElementById("modal")
      )}
      {ReactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
