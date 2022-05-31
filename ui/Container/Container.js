import styled from "styled-components";
import { lg, md, sm, xl } from "../css";

const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  ${sm`
    max-width: 540px;
  `};
  ${md`
    max-width: 720px;
  `};
  ${lg`
    max-width: 960px;
  `};
  ${xl`
    max-width: 1140px;
  `}
`;

const Container = (props) => {
  return <StyledContainer {...props} />;
};

export default Container;
