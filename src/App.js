import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import CourseGoals from "./components/CourseGoals/CourseGoals";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Vegitables",
    amount: 400,
    date: new Date(2022, 2, 28),
  },
  {
    id: 2,
    title: "Green Battani",
    amount: 100,
    date: new Date(2022, 2, 28),
  },
  {
    id: 3,
    title: "Chicken",
    amount: 400,
    date: new Date(2022, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const [userList, setUserList] = useState([]);

  const addNewUserHandler = (newUser) => {
    console.log(newUser);
    setUserList((prevUserList) => {
      return [...prevUserList, newUser];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseItems items={expenses} />
        <CourseGoals />
        <AddUser onNewUserAdded={addNewUserHandler}></AddUser>
        {userList.length > 0 ? <UsersList users={userList} /> : ""}
      </header>
    </div>
  );
};

export default App;
