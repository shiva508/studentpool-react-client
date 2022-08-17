import React, { Fragment, useRef, useImperativeHandle } from "react";
import classes from "./InputComponent.module.css";
const InputComponent = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.labelname}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      ></input>
    </div>
  );
});

export default InputComponent;
