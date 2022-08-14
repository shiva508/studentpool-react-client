import React, { useState } from "react";
import "./AddExpense.css";

const AddExpense = (props) => {
  const [addExpenseEnabled, setAddExpenseEnabled] = useState(false);
  const enableAddExpenseHandler = () => {
    if (addExpenseEnabled) {
      setAddExpenseEnabled(true);
    } else {
      setAddExpenseEnabled(false);
    }
    props.onEnableAddExpense(addExpenseEnabled);
  };
  return (
    <div className="add-new-expense__actions">
      <button onClick={enableAddExpenseHandler}>Add New Expense</button>
    </div>
  );
};
export default AddExpense;
