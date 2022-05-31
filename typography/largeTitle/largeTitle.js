import React from "react";
import styled from "styled-components";
import { color, fontLight, text5XLCss } from "@nightfall-ui/css";

const StyledLargeTitle = styled.div`
  margin-top: 0;
  margin-bottom: 2rem;
  ${fontLight};
  ${text5XLCss};
  color: ${color("gray.800")};
`;
const LargeTitle = ({ as = "div", ...props }) => {
  return <StyledLargeTitle {...props} as={as} />;
};

export default LargeTitle;
