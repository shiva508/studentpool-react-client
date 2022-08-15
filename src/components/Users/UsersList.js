import React from "react";
import uls from "./UsersList.module.css";
import UserCard from "../UI/UserCard";

const UsersList = (props) => {
  return (
    <UserCard className={uls.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </UserCard>
  );
};

export default UsersList;
