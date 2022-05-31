import React from "react";
import styled from "styled-components";
import { Flex } from "../Flex";

const ScrollContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  margin-bottom: -50px;
  padding-bottom: 50px;
  user-select: none;
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
      <ScrollContainer>
        <Flex>{children}</Flex>
      </ScrollContainer>
    </div>
  );
};

const CarouselItem = ({ children }) => {
  return (
    <div
      style={{
        //TODO: add media query
        flexBasis: 1,
        marginRight: "1rem",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
