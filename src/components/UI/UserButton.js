import React from "react";
import userbuttonstyle from "./UserButton.module.css";
const UserButton = (props) => {
  return (
    <button
      className={userbuttonstyle.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default UserButton;
