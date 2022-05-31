import React from "react";
import styled, { css } from "styled-components";
import {
  xsm as xsmMedia,
  sm as smMedia,
  md as mdMedia,
  lg as lgMedia,
  xxl as xxlMedia,
  xl as xlMedia,
} from "../css";

const StyledCol = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 0 15px;
  ${({ xsm }) => {
    if (xsm) {
      return xsmMedia`
          flex: 0 0 ${(100 / 12) * xsm}%;
          max-width: ${(100 / 12) * xsm}%;
      `;
    }
    return css`
      flex: 0 0 100%;
      max-width: 100%;
    `;
  }};

  ${({ sm }) => {
    if (sm) {
      return smMedia`
        flex: 0 0 ${(100 / 12) * sm}%;
        max-width: ${(100 / 12) * sm}%;
      `;
    }
  }};
  ${({ md }) => {
    if (md) {
      return mdMedia`
        flex: 0 0 ${(100 / 12) * md}%;
        max-width: ${(100 / 12) * md}%;
      `;
    }
  }};
  ${({ lg }) => {
    if (lg) {
      return lgMedia`
        flex: 0 0 ${(100 / 12) * lg}%;
        max-width: ${(100 / 12) * lg}%;
      `;
    }
  }};
  ${({ xl }) => {
    if (xl) {
      return xlMedia`
        flex: 0 0 ${(100 / 12) * xl}%;
        max-width: ${(100 / 12) * xl}%;
      `;
    }
  }};
  ${({ xxl }) => {
    if (xxl) {
      return xxlMedia`
        flex: 0 0 ${(100 / 12) * xxl}%;
        max-width: ${(100 / 12) * xxl}%;
      `;
    }
  }};
`;

const Col = ({ xsm, sm, md, lg, xl, xxl, ...props }) => {
  return (
    <StyledCol {...props} xsm={xsm} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} />
  );
};

export default Col;
