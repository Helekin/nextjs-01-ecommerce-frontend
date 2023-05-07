import React from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import { initialValues, validationSchema } from "./RegisterForm.form";

import { Auth } from "@/api";

const authController = new Auth();

export function RegisterForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authController.register(formValue);
        router.push("/join/sign-in");
        console.log("OK");
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          name="email"
          type="text"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="username"
          type="text"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          placeholder="Names"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Register
      </Form.Button>
    </Form>
  );
}
