import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      {/* PROPERY DRILLING NOT REQUIRED with context */}
      {/* <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      /> */}
      <Navigation />
    </header>
  );
};

export default MainHeader;
