import { Container, Row, Section } from "../../../../ui";
import Col from "../../../../ui/Col/Col";
import { TextCenter } from "../../../../ui/TextCenter";
import React, { useRef } from "react";
import { Carousel } from "../../../../ui/Carousel";
import { useAppearedFromBottom } from "../../../../hooks/useAppearedFromBottom";
import LargeTitle from "../../../../typography/largeTitle/largeTitle";
import { Body } from "../../../../typography/Body";
import { SectionSubtitle } from "../../../../ui/SectionSubtitle";
import styled from "styled-components";
import offers from "./offers";
import { lg, md, sm, xl } from "../../../../ui/css";

const StyledTile = styled.div`
  background-color: white;
`;
const Tile = (props) => {
  return (
    <StyledTile
      {...props}
      style={{
        ...props.style,
      }}
    />
  );
};

const Img = styled.img`
  width: 100%;
`;
const Offer = ({ img, price, name, description }) => {
  return (
    <TextCenter>
      <Img src={img.src} alt="" />
      <div
        style={{
          padding: "3rem",
        }}
      >
        <h5
          style={{
            lineHeight: 1.45,
            color: "#000",
            fontSize: "1.5rem",
            margin: 0,
            marginBottom: "0.5rem",
            fontWeight: 300,
          }}
        >
          {price}
        </h5>
        <h5>{name}</h5>
        <Body as={"p"}>{description}</Body>
      </div>
    </TextCenter>
  );
};

const CarouselItem = styled(Carousel.Item)`
  white-space: normal;
  display: inline-block;

  width: calc(100vw - 30px);
  ${sm`
    width: 250px;
  `};
  ${md`
    width: 330px;
  `};
  ${lg`
    width: 300px;
  `};
  ${xl`
    width: 360px;
  `}
`;

const OffersSection = ({ id }) => {
  const ref = useRef(null);
  const appearedFromBottom = useAppearedFromBottom({ ref });
  return (
    <Section
      id={id}
      style={{
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col
            md={12}
            style={{
              marginBottom: "3rem",
            }}
          >
            <Row
              ref={ref}
              justify={"center"}
              style={{
                transition: "opacity 400ms ease 200ms",
                opacity: appearedFromBottom ? 1 : 0,
              }}
            >
              <Col md={12}>
                <TextCenter>
                  <SectionSubtitle>Our Offers</SectionSubtitle>
                  <LargeTitle as={"h2"}>Our offer this Summer</LargeTitle>
                </TextCenter>
              </Col>
              <Col md={7}>
                <TextCenter>
                  <Body as={"p"}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </Body>
                </TextCenter>
              </Col>
            </Row>
          </Col>
          <Col md={12}>
            <Carousel>
              {offers.map((prod) => {
                return (
                  <CarouselItem key={prod.id}>
                    <Tile>
                      <Offer {...prod} />
                    </Tile>
                  </CarouselItem>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default OffersSection;
