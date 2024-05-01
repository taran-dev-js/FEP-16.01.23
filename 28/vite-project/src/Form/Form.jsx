import { useFormik } from "formik";
import * as Yup from "yup";
import { InputWrap } from "./styles";

const validation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const Form = () => {
  const {
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    errors,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      firstName: "firstName",
      lastName: "",
      email: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log({ touched, isValid, dirty });
  return (
    <form onSubmit={handleSubmit}>
      <InputWrap>
        <input
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="firstName"
        />
        {touched.firstName && errors.firstName ? (
          <span>{errors.firstName}</span>
        ) : null}
      </InputWrap>
      <InputWrap>
        <input
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="lastName"
        />
        {touched.lastName && errors.lastName ? (
          <span>{errors.lastName}</span>
        ) : null}
      </InputWrap>
      <InputWrap>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
        />
        {touched.email && errors.email ? <span>{errors.email}</span> : null}
      </InputWrap>

      <button type="submit" disabled={!(isValid && dirty)}>
        Submit
      </button>
    </form>
  );
};
