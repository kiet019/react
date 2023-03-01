import React, { useEffect } from "react";
import { Button, Icon, Switch, Textarea, TextInput } from "react-materialize";
import { useFormik } from "formik";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      phone: "",
      program: 0,
      message: "",
      agree: false,
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" onSubmit={handleSubmit}>
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
        <div className="button" style={{ textAlign: "right" }}>
          <div style={{display: "flex", justifyContent: "space-between"}}> 
            <Switch
              id="Switch-20"
              onChange={function noRefCheck() {}}
            />
            <Button
              node="button"
              type="submit"
              waves="light"
              style={{ backgroundColor: "rgb(184, 4, 4)" }}
            >
              Submit
              <Icon right>send</Icon>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
