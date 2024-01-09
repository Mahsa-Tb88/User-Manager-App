import React from "react";
import "./userList.scss";
import { useUsersContext } from "../../Context/UsersContext";
import User from "../User/User";
export default function UserList() {
  const { state } = useUsersContext();
  return (
    <div className="w-25 text-center py-4 userList">
      <div className="inputSearch">
        <input type="text" placeholder="Search..." className="search" />
      </div>
      <div>
        <h2 className="fs-3 py-5">User List</h2>
        {state.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
