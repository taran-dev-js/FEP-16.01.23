import { Formik, Form, Field } from "formik";

export const FormFormik = () => {
  const initialValues = {
    firstName: "firstName",
    lastName: "",
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        console.log(values);
      }}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
