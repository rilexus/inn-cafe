import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.4;
`;

const P = (props) => {
  return <StyledP {...props} />;
};

export default P;
