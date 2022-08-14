import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";
import React, { useState } from "react";
const NewExpense = (props) => {
  const [isAddeble, setIsAddeble] = useState(true);
  const saveExpanseHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsAddeble(true);
  };
  const addNewExpenseHandler = (isEnabled) => {
    setIsAddeble(isEnabled);
  };

  const cancleExpanseHandler = () => {
    setIsAddeble(true);
  };

  return (
    <div className="new-expense">
      {isAddeble === true ? (
        <AddExpense onEnableAddExpense={addNewExpenseHandler} />
      ) : (
        <ExpenseForm
          onCancleExpense={cancleExpanseHandler}
          onSaveExpenseData={saveExpanseHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
