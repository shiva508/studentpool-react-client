import React, { useState, useEffect } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import CourseGoals from "./components/CourseGoals/CourseGoals";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Login from "./components/LoginApp/Login/Login";
import Home from "./components/LoginApp/HomePage/Home";
import MainHeader from "./components/LoginApp/MainHeader/MainHeader";
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const iuli = localStorage.getItem("isLoggedIn");
    if (iuli === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* PRACTICE */}
        {/* <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseItems items={expenses} />
        <CourseGoals />
        <AddUser onNewUserAdded={addNewUserHandler}></AddUser>
        {userList.length > 0 ? <UsersList users={userList} /> : ""} */}
        {/* PRACTICE Login*/}
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </header>
    </div>
  );
};

export default App;
