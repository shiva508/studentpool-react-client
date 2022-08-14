import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmont, setEnteredAmont] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //  enteredTitle: "",
  //  enteredAmont: "",
  //  enteredDate: "",
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredTitle: event.target.value,
    //});
  };
  const amountChangeHandler = (event) => {
    setEnteredAmont(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredAmont: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredDate: event.target.value,
    //});
    //setUserInput((prevState) => {
    //  return {
    //    ...prevState,
    //    enteredDate: event.target.value,
    //  };
    //});
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmont,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmont("");
    setEnteredTitle("");
    setEnteredDate("");
  };
  const addExpenseCancleHandler = () => {
    props.onCancleExpense();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmont}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={addExpenseCancleHandler}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
