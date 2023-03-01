import React from "react";
import AddContact from "./Contact/AddContact";
import ShowContact from "./Contact/ShowContact";

export default function Contact() {

  return (
    <div className="contact">
        <AddContact/>
        <ShowContact/>
    </div>
  );
}
