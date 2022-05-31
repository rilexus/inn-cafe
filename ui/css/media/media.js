import { css } from "styled-components";

const max = (width) => {
  return (...props) => {
    return css`
      @media (max-width: ${width}) {
        ${props}
      }
    `;
  };
};

const min = (width) => {
  return (...props) => {
    return css`
      @media (min-width: ${width}) {
        ${props}
      }
    `;
  };
};
// X-Small	           xsm	  <576px
// Small               sm	  ≥576px
// Medium  	           md	  ≥768px
// Large	           lg	  ≥992px
// Extra large	       xl	  ≥1200px
// Extra extra large   xxl    ≥1400px

const xxl = (...args) => min("1400px")`${css(...args)}`;
const xl = (...args) => min("1200px")`${css(...args)}`;
const lg = (...args) => min("992px")`${css(...args)}`;
const md = (...args) => min("768px")`${css(...args)}`;
const sm = (...args) => min("567px")`${css(...args)}`;
const xsm = (...args) => max("576px")`${css(...args)}`;

export { min, md, sm, lg, xxl, xl, xsm };
