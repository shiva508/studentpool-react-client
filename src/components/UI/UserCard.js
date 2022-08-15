import React from "react";
import styles from "./UserCard.module.css";
const UserCard = (props) => {
  return (
    <div className={`${styles.userCard} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default UserCard;
