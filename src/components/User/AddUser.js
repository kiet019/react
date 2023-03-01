import React from "react";
import { Button, Icon, TextInput } from "react-materialize";
import { useState } from "react";
import { addUser } from "../../features/Users";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function generateUniqueId() {
  const uuidNumber = parseInt(uuidv4().replace(/-/g, ''), 16);
  return uuidNumber;
}

export default function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="add-user">
      <TextInput
        id="TextInput-68"
        placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextInput
        id="TextInput-68"
        placeholder="Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <Button
        onClick={() => {
          dispatch(addUser({ id: generateUniqueId(), name: name, username: username }));
        }}
        style={{ backgroundColor: "rgb(184, 4, 4)", width: "100%" }}
      >
        Add User
        <Icon right>send</Icon>
      </Button>
    </div>
  );
}
