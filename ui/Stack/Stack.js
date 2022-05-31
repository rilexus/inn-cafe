import styled from "styled-components";
import React from "react";

const StyledZStack = styled.div`
  display: grid;
  & > * {
    grid-area: 1/1;
  }
`;

const Stack = (props) => <StyledZStack {...props} />;

export default Stack;
