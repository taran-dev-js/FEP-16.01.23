import { Button } from "../Button";
import { InputWrapper, Input as StyledInput } from "./Form.parts";
import { Input } from "../Input";
import { useState } from "react";

export const Form = () => {
  const [error, setError] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [formValues, setFormValues] = useState({
    nameValue: "",
    lastNameValue: "",
  });

  const classes = `input ${error ? " error" : ""}`;

  const onChangeFirstName = (event) => {
    // setNameValue(event.target.value);

    // if (event.target.value.length > 3) {
    //   setDisabled(true);
    // } else {
    //   setDisabled(false);
    // }

    setFormValues((prevState) => ({
      ...formValues,
      nameValue: event.target.value,
    }));
  };

  return (
    <form action="#">
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Name"
          name="name"
          hasError={error}
          value={nameValue}
          onChange={(event) => onChangeFirstName(event)}
        />
      </InputWrapper>

      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Last Name"
          name="lastName"
          className={classes}
          value={lastNameValue}
          onChange={(event) => setLastNameValue(event.target.value)}
        />
      </InputWrapper>

      <Input type="text" placeholder="Base" name="Base" />

      <Button
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          //   setError((prev) => setError(!prev));
        }}
      >
        Submit
      </Button>
    </form>
  );
};
