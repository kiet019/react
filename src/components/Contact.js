import React, { useEffect } from "react";
import { Button, Icon, Textarea, TextInput } from "react-materialize";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleSubmit =(e)=> {
    e.preventDefault()
  }
  return (
    <div className="contact" onSubmit={handleSubmit}>
      <h3>Contact Us</h3>
      <form action="#" method="post">
        <div className="name">
          <Textarea id="Textarea-68" label="First Name" />
          <div></div>
          <Textarea id="Textarea-68" label="Last Name" />
        </div>
        <TextInput
          style={{ marginBottom: 40 }}
          icon="email"
          id="TextInput-132"
          label="Email"
        />
        <Textarea id="Textarea-68" label="Subject" />
        <Textarea
          id="Textarea-146"
          style={{ border: "2px solid white", height: "150px" }}
          placeholder="Description"
          rows={5}
        />
        <div className="button" style={{textAlign: "right"}}>
          <Button
            node="button"
            type="submit"
            waves="light"
            style={{backgroundColor: "rgb(184, 4, 4)" }}
          >
            Submit
            <Icon right>send</Icon>
          </Button>
        </div>
      </form>
    </div>
  );
}
