import React from "react";
import { Button, TextInput } from "react-materialize";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../../features/Users";

export default function ShowUser() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [newUsername, setNewUsername] = useState("");
  return (
    <div
      className="show-user"
      style={{ gridTemplateRows: "repeat(" + userList.length + ",100px)" }}
    >
      {userList.map((user) => (
        <div className="user-info" key={user.id}>
          <span className="material-icons login">account_circle</span>
          <div className="info">
            {user.name}
            <br></br>
            {user.username}
          </div>
          <TextInput
            id="TextInput-68"
            placeholder="Input new name"
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <Button
            style={{ backgroundColor: "rgb(32, 233, 32)" }}
            onClick={() => {
              dispatch(updateUsername({ id: user.id, username: newUsername }));
            }}
          >
            Update
          </Button>
          <Button
            style={{ backgroundColor: "rgb(184, 4, 4)" }}
            onClick={() => {
              if (window.confirm("You sure to want to delete this user") === true) {
                dispatch(deleteUser({ id: user.id }));
                alert("Delete success")
              } else {
                alert("Delete fail")
              }
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
