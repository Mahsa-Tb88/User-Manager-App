import React, { useEffect, useState } from "react";
import Page from "./Components/Page/Page";
import UserList from "./Components/UserList/UserList";
import { useUsersContext } from "./Context/UsersContext";

export default function App() {
  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-start w-full ">
        <UserList />
        <Page />
      </div>
    </div>
  );
}
