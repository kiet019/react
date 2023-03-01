import React, { useEffect, useState } from "react";
import { Button, Icon, Select, Switch, Textarea, TextInput } from "react-materialize";
import { useFormik } from "formik";

export default function Contact() {
  const [isDisabled, setIsDisabled] = useState(true);
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
  }, []);
  return (
    <div className="contact">
      <form onSubmit={formik.handleSubmit}>
        <div className="name">
          <Textarea
            id="Textarea-68"
            placeholder="First Name"
            name="fname"
            value={formik.values.fname}
            onChange={formik.handleChange}
          />
          <div></div>
          <Textarea
            id="Textarea-68"
            placeholder="Last Name"
            name="lname"
            value={formik.values.lname}
            onChange={formik.handleChange}
          />
        </div>
        <TextInput
          style={{ marginBottom: 20 }}
          icon="email"
          id="TextInput-132"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextInput
          style={{ marginBottom: 20 }}
          icon="phone"
          id="TextInput-133"
          placeholder="Phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <Select
          id="Select-16"
          multiple={false}
          options={{
            classes: "",
            dropdownOptions: {
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            },
          }}
          value="2"
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Select>
        <Textarea id="Textarea-68" placeholder="Subject" />
        <Textarea
          id="Textarea-146"
          style={{ border: "2px solid white", height: "150px" }}
          placeholder="Description"
          rows={5}
        />
        <div className="button" style={{ textAlign: "right" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Switch
              id="Switch-20"
              offLabel=""
              onChange={function noRefCheck() {
                isDisabled === true
                  ? setIsDisabled(false)
                  : setIsDisabled(true);
              }}
              onLabel="Agree to terms and condition"
            />
            <Button
              node="button"
              type="submit"
              waves="light"
              disabled={isDisabled}
              style={{ backgroundColor: "rgb(184, 4, 4)" }}
            >
              Send
              <Icon right>send</Icon>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
