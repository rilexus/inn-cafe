import styled from "styled-components";
import React from "react";
import { inputCss } from "../css/input.css";

const StyledInput = styled.input`
  overflow: auto;
  ${inputCss};
`;

const Input = ({ type = "text", ...props }) => {
  return <StyledInput type={type} {...props} />;
};

export default Input;
