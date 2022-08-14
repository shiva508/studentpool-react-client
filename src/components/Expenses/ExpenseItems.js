import React, { useState } from "react";
import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpensesFilter from "./filter/ExpensesFilter";
import Expenses from "./Expenses";
import ExpenseChart from "./ExpenseChart";

const ExpenseItems = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <Expenses items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default ExpenseItems;
