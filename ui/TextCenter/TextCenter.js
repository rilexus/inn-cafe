import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledCenter = styled.div`
  text-align: center;
  position: relative;
`;

const TextCenter = forwardRef(function TextCenter(props, ref) {
  return <StyledCenter {...props} ref={ref} />;
});

export default TextCenter;
