import React from "react";
import { useSelector } from "react-redux";

export default function ShowContact() {
  const contactList = useSelector((state) => state.contacts.value);
  return (
    <div className="show-contact">
      {contactList.map((contact) => (
        <div className="contact-info">
          <div
            style={{ display: "grid", gridTemplateColumns: "3fr 4fr 3fr 1fr" }}
          >
            <div>
              From: {contact.fname} {contact.lname}
            </div>
            <div>Email: {contact.email}</div>
            <div>Phone: {contact.phone}</div>
          </div>
          <div>Type: {contact.program}</div>
          <div>Title: {contact.title}</div>
          <div>Message: {contact.message}</div>
        </div>
      ))}
    </div>
  );
}
