import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";
const Expenses = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses</h2>;
  }
  if (props.items.length > 0) {
    return props.items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
};
export default Expenses;
