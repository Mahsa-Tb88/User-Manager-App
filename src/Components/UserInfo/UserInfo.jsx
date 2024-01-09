import React, { useState } from "react";
import "./userInfo.scss";
import { toast } from "react-toastify";
import { useUsersContext } from "../../Context/UsersContext";
import { deleteUser, getAllUsers } from "../../utils/storage";
export default function UserInfo() {
  const { state, dispatch } = useUsersContext();
  const user = getAllUsers().find((user) => user.id == state.showInfoUser.id);
  const listOfProvince = [
    "British Columbia",
    "Alberta",
    "Manitoba",
    "New Brunswick",
    "Nova Scotia",
    "Ontario",
    "Newfoundland and Labrador",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];
  function deleteUserHandler(id) {
    deleteUser(id);
    const users = getAllUsers();
    dispatch({ type: "deleteUser", payload: users });
    toast.success("Deleted Successfully!");
  }
  function editUserHandler(id) {
    dispatch({ type: "editUser", payload: { status: true, id } });
  }
  return (
    <div className="w-75 userinfo d-flex flex-column justify-content-start align-items-start">
      <div className="d-flex justify-content-start align-items-center">
        <img className="w-25 rounded-circle me-5" src={user.img} />
        <div>
          <p className="fs-4 mb-4">
            {user.firstname}
            {user.lastname}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn-edit me-3"
              onClick={() => deleteUserHandler(user.id)}
            >
              Delete User
            </button>
            <button
              className="btn-delete"
              onClick={() => editUserHandler(user.id)}
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4  d-flex flex-column justify-content-start align-items-start">
        <div className="p-2 border-bottom section">
          <span className="fs-5">Phone:</span>
          <span className="fs-5 ms-4">{user.phone}</span>
        </div>
        <div className="p-2 border-bottom section ">
          <span className="fs-5">Province:</span>
          <span className="fs-5 ms-4">{user.province}</span>
        </div>
        <div className="p-2 border-bottom section ">
          <span className="fs-5">Description:</span>
          <p className="mt-2 ms-4 desc">{user.desc}</p>
        </div>
      </div>
    </div>
  );
}
