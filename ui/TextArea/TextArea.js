import styled from "styled-components";
import React from "react";
import { inputCss } from "../css/input.css";

const StyledTextArea = styled.textarea`
  ${inputCss};
  height: 6rem;
`;

const TextArea = ({ cols = "30", rows = "10", ...props }) => {
  return <StyledTextArea {...props} cols={cols} rows={rows} />;
};

export default TextArea;
