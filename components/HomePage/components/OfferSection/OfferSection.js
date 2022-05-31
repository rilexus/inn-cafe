import { Container, Row, Section } from "../../../../ui";
import Col from "../../../../ui/Col/Col";
import { TextCenter } from "../../../../ui/TextCenter";
import React, { useRef } from "react";
import { P } from "../../../../ui/P";
import { Carousel } from "../../../../ui/Carousel";
import { useAppearedFromBottom } from "../../../../hooks/useAppearedFromBottom";
import LargeTitle from "../../../../typography/largeTitle/largeTitle";
import { Subtitle } from "../../../../typography/Subtitle";
import { Body } from "../../../../typography/Body";
import { SectionSubtitle } from "../../../../ui/SectionSubtitle";

const Tile = (props) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: "white",
        ...props.style,
      }}
    />
  );
};

const tiles = [
  {
    id: "1",
    name: "Beef with Sausage",
    price: "$19.90",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: {
      src: "https://preview.colorlib.com/theme/eatwell/images/xoffer_1.jpg.pagespeed.ic.IZG2_xPTiR.webp",
    },
  },
  {
    id: "2",
    name: "Fresh Salmon Fish",
    price: "$15.90",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: {
      src: "https://preview.colorlib.com/theme/eatwell/images/xoffer_2.jpg.pagespeed.ic.Xq_8K7TMeN.webp",
    },
  },
  {
    id: "3",
    name: "Beef Ribs",
    price: "$33.90",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: {
      src: "https://preview.colorlib.com/theme/eatwell/images/xoffer_3.jpg.pagespeed.ic.7TxD9FNnKq.webp",
    },
  },
  {
    id: "4",
    name: "Beef with Sausage",
    price: "$19.90",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: {
      src: "https://preview.colorlib.com/theme/eatwell/images/xoffer_1.jpg.pagespeed.ic.IZG2_xPTiR.webp",
    },
  },
  {
    id: "5",
    name: "Fresh Salmon Fish",
    price: "$15.90",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: {
      src: "https://preview.colorlib.com/theme/eatwell/images/xoffer_2.jpg.pagespeed.ic.Xq_8K7TMeN.webp",
    },
  },
  {
    id: "6",
    name: "Beef Ribs",
    price: "$33.90",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: {
      src: "https://preview.colorlib.com/theme/eatwell/images/xoffer_3.jpg.pagespeed.ic.7TxD9FNnKq.webp",
    },
  },
];

const Offer = ({ img, price, name, description }) => {
  return (
    <TextCenter>
      <img src={img.src} alt="" />
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

const OffersSection = ({ id }) => {
  const ref = useRef(null);
  const appearedFromBottom = useAppearedFromBottom({ ref });
  return (
    <Section
      id={id}
      style={{
        backgroundColor: "#f8f9fa",
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
              {tiles.map((prod) => {
                return (
                  <Carousel.Item key={prod.id}>
                    <Tile>
                      <Offer {...prod} />
                    </Tile>
                  </Carousel.Item>
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
