import React from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  margin-bottom: -50px;
  padding-bottom: 50px;
  user-select: none;
  // display: flex;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
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
