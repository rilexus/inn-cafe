import React from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  position: relative;
  overflow-y: scroll;

  margin-right: -30px;

  user-select: none;
  // display: flex;
  white-space: nowrap;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px #8b8b8b;
    background-color: transparent;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c2c2c2;
  }
`;

const Carousel = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "block",
        overflow: "hidden",
      }}
    >
      <ScrollContainer>{children}</ScrollContainer>
    </div>
  );
};

const StyledItem = styled.div`
  margin-right: 1rem;
  position: relative;
  scroll-snap-align: start;
`;
const CarouselItem = ({ children, ...props }) => {
  return <StyledItem {...props}>{children}</StyledItem>;
};

Carousel.Item = CarouselItem;

export default Carousel;
