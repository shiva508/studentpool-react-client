import React, { Fragment } from "react";
import ems from "./ErrorPortalModel.module.css";
import UserCard from "./UserCard";
import UserButton from "./UserButton";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={ems.backdrop} onClick={props.onErrorConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorPortalModel = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onErrorConfirm={props.onErrorConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrorConfirm={props.onErrorConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
export default ErrorPortalModel;
