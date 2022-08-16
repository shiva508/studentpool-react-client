import React, { useState, Fragment, useRef } from "react";
import UserCard from "../UI/UserCard";
import adduserstyles from "./AddUser.module.css";
import UserButton from "../UI/UserButton";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helper/Wrapper";
import ErrorPortalModel from "../UI/ErrorPortalModel";

const AddUser = (props) => {
  //USEREF
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const fin = nameInputRef.current.value;
    const fia = ageInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge === 0 ||
      enteredAge < 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter name and age",
      });
      return;
    } else {
      console.log(enteredUsername, enteredAge);
      props.onNewUserAdded({
        id: Math.random().toString(),
        name: enteredUsername,
        age: +enteredAge,
      });
      setEnteredUsername("");
      setEnteredAge(0);
    }
  };
  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    // <Wrapper>
    <Fragment>
      {error && (
        <ErrorModel
          onErrorConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModel>
      )}
      {/* {error && (
        <ErrorPortalModel
          onErrorConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )} */}
      <UserCard className={adduserstyles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age"> Age(31Yers)</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <UserButton type="submit">Add User</UserButton>
        </form>
      </UserCard>
      {/* //</Wrapper> */}
    </Fragment>
  );
};

export default AddUser;
