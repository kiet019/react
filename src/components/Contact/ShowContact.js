import React, { useState, useEffect } from "react";
import { Button, Icon, TextInput } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  updateContact,
  addContact,
} from "../../features/Contacts";
const baseURL = `https://64048c453bdc59fa8f3b5897.mockapi.io/api/films/contact`;

export default function ShowContact() {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  // Lấy danh sách contact từ state
  const contactList = useSelector((state) => state.contacts.value);
  const fetchContacts = () => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length !== 0) {
          data.forEach((element) => {
            if (contactList.length === 0) {
              dispatch(addContact(element))
            }
          });
        }
      })
      .catch((error) => console.log(error));
  };
  // Hàm để lấy danh sách contact từ API
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="show-contact">
      {contactList.map((contact) => (
        <div className="contact-info" key={contact.id}>
          <div
            style={{ display: "grid", gridTemplateColumns: "3fr 4fr 3fr 1fr" }}
          >
            <div>
              From: {contact.fname} {contact.lname}
            </div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <Icon>mail</Icon> {contact.email}
            </div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <Icon>phone</Icon> {contact.phone}
            </div>
            <Button
              style={{
                textAlign: "right",
                color: "red",
                backgroundColor: "rgba(0,0,0,0)",
                border: "none",
                boxShadow: "none",
                padding: "0",
              }}
              onClick={() => {
                if (
                  window.confirm("You sure to want to delete this contact") ===
                  true
                ) {
                  dispatch(deleteContact({ id: contact.id }));
                  alert("Delete success");
                } else {
                  alert("Delete fail");
                }
              }}
            >
              <Icon>delete</Icon>
            </Button>
          </div>
          <div>
            Type: {contact.program} <br></br> Title: {contact.title} <br></br>
            Message: {contact.message}
          </div>
          <div
            style={{
              color: contact.status ? "rgb(32, 233, 32)" : "rgb(184, 4, 4)",
            }}
          >
            Status: {contact.status ? "PROCESSED" : "NOT PROCESSED"}
            <br></br>
            {contact.note !== "" ? "Note: " + contact.note : null}
          </div>
          <div className="update-contact">
            <TextInput
              id="TextInput-68"
              placeholder="Input new note"
              onChange={(e) => setNote(e.target.value)}
              style={{
                color: "white",
                boxShadow: "none",
                borderBottom: "1px solid white",
              }}
            />
            <Button
              onClick={() => {
                dispatch(
                  updateContact({ id: contact.id, note: note, status: true })
                );
              }}
            >
              Update
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
