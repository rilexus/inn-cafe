import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  font-size: 1rem;
  color: black;
  line-height: 1.5;
`;

const Body = ({ as = "div", ...props }) => {
  return <Styled as={as} {...props} />;
};

export default Body;
