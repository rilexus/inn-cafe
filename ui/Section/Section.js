import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 8em 0;
`;

const Section = (props) => {
  return <StyledSection {...props} />;
};

export default Section;
