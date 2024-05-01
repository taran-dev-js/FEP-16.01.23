import { styled, css } from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export const Input = styled.input`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;

  ${(props) =>
    props.hasError &&
    css`
      background: #bf4f74;
      color: red;
    `}
`;
