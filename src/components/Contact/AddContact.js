import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Button,
  Icon,
  Select,
  Switch,
  Textarea,
  TextInput,
} from "react-materialize";
import { useFormik } from "formik";

export default function AddContact() {
  const [isDisabled, setIsDisabled] = useState(true);
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      program: "0",
      title: "",
      message: "",
      agree: false,
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      fname: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      lname: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number().integer().typeError("Please select a program."),
      title: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  useEffect(() => {
    if (
      Object.keys(formik.touched).length > 0 &&
      Object.keys(formik.errors).length === 0 &&
      formik.values.program !== "0"
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.touched, formik.errors, formik.values.program]);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="name">
          <Textarea
            id="Textarea-68"
            placeholder="First Name"
            name="fname"
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div></div>
          <Textarea
            id="Textarea-70"
            placeholder="Last Name"
            name="lname"
            value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.touched.fname && <>{formik.errors.fname}</>}
          </div>
          <div></div>
          <div className="error">
            {formik.touched.lname && <>{formik.errors.lname}</>}
          </div>
        </div>
        <TextInput
          style={{ marginBottom: 20 }}
          icon="email"
          id="TextInput-132"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.email && <>{formik.errors.email}</>}
        </div>
        <TextInput
          style={{ marginBottom: 20 }}
          icon="phone"
          id="TextInput-133"
          placeholder="Phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.phone && <>{formik.errors.phone}</>}
        </div>
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
          name="program"
          value={formik.values.program}
          onChange={formik.handleChange}
        >
          <option value="0">Please select</option>
          <option value="1">Support</option>
          <option value="2">Report</option>
          <option value="3">Feedback</option>
        </Select>
        <div className="error">
          {formik.touched.program && <>{formik.errors.program}</>}
        </div>
        <Textarea
          id="Textarea-68"
          placeholder="Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.title && <>{formik.errors.title}</>}
        </div>
        <Textarea
          id="Textarea-146"
          style={{ border: "2px solid white", height: "150px" }}
          placeholder="Description"
          rows={5}
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.message && <>{formik.errors.message}</>}
        </div>
        <div className="button" style={{ textAlign: "right" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Switch
                id="Switch-20"
                offLabel=""
                onChange={function noRefCheck() {}}
                onLabel="Agree to terms and condition"
                name="agree"
                value={formik.values.agree}
                onClick={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="error">
                {formik.touched.agree && <>{formik.errors.agree}</>}
              </div>
            </div>
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
