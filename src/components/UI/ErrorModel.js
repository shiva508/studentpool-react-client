import React from "react";
import ems from "./ErrorModel.module.css";
import UserCard from "./UserCard";
import UserButton from "./UserButton";
const ErrorModel = (props) => {
  return (
    <div>
      <div className={ems.backdrop} onClick={props.onErrorConfirm} />
      <UserCard className={ems.modal}>
        <header className={ems.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={ems.content}>
          <p>{props.message}</p>
        </div>
        <footer className={ems.actions}>
          <UserButton onClick={props.onErrorConfirm}>Okey</UserButton>
        </footer>
      </UserCard>
    </div>
  );
};
export default ErrorModel;
