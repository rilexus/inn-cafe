import styled from "styled-components";
import React, { useState } from "react";

const Icon = styled.div`
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;

  span {
    background-color: ${({ fill }) => fill};
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  &:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }
  &:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }
  &:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }
  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;

const BurgerIcon = ({ open, fill = "black", ...props }) => {
  return (
    <Icon
      fill={fill}
      className={open ? "open" : ""}
      onClick={() => {
        props?.onClick?.(open);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </Icon>
  );
};

export default BurgerIcon;
