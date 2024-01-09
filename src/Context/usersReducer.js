export function usersReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "addUserClicked":
      return { ...state, isAddUserClicked: payload };
    case "tableUser":
      return { ...state, isShowTableUser: payload };
    case "addUserSubmit":
      return {
        ...state,
        users: payload,
        isAddUserClicked: false,
        editUser: { status: false, id: null },
      };
    case "showInfoOfUser":
      return { ...state, showInfoUser: payload };
    case "deleteUser":
      return {
        ...state,
        users: payload,
        showInfoUser: { status: false, id: null },
      };
    case "editUser":
      return {
        ...state,
        editUser: payload,
        showInfoUser: { status: false, id: null },
      };

    case "falseEditUser":
      return { ...state, editUser: payload };
  }
  throw new Error("Invalid action");
}
