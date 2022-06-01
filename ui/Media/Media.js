import styled, { css } from "styled-components";
import { lg, md, sm, xl, xsm, xxl } from "../css";
import React from "react";

const StyledDiv = styled.div`
  ${({ default: _default }) =>
    css`
      ${_default}
    `};
  ${({ xsm: _xsm }) => {
    if (!_xsm) return "";
    return xsm`${_xsm}`;
  }};
  ${({ sm: _sm }) => {
    if (!_sm) return "";
    return sm`${_sm}`;
  }};
  ${({ md: _md }) => {
    if (!_md) return "";
    return md`${_md}`;
  }};
  ${({ lg: _lg }) => {
    if (!_lg) return "";
    return lg`${_lg}`;
  }};
  ${({ xl: _xl }) => {
    if (!_xl) return "";
    return xl`${_xl}`;
  }};
  ${({ xxl: _xxl }) => {
    if (!_xxl) return "";
    return xxl`${_xxl}`;
  }};
`;

const Media = ({ as = "div", md, default: _default, ...props }) => {
  return <StyledDiv {...props} as={as} md={md} default={_default} />;
};

export default Media;
