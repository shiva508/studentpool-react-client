import "./ExpenseDate.css";
import React from "react";
const ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseDay}</div>
      <div className="expense-date__day">{expenseYear}</div>
    </div>
  );
};
export default ExpenseDate;
