import React, { useContext, useReducer } from "react";
import { getAllUsers } from "../utils/storage";
import { usersReducer } from "./usersReducer";

const UsersContext = React.createContext();
export default UsersContext;

function UsersContextProvider({ children }) {
  const initialUsers = getAllUsers();
  const [state, dispatch] = useReducer(usersReducer, {
    users: initialUsers,
    isAddUserClicked: false,
    isShowTableUser: false,
    showInfoUser: { status: false, id: null },
    editUser: { status: false, id: null },
  });

  const context = { state, dispatch };

  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
}

function useUsersContext() {
  return useContext(UsersContext);
}
export { UsersContextProvider, useUsersContext };
