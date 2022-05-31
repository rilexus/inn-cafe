import React from "react";
import styled from "styled-components";
import { color, fontLight, mb50 } from "@nightfall-ui/css";

const StyledSubtitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5em;
  margin-top: 0;
  ${mb50};
  color: ${color("gray.600")};
  ${fontLight};
`;

const Subtitle = ({ as = "div", ...props }) => {
  return <StyledSubtitle as={as} {...props} />;
};

export default Subtitle;
