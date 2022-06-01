import { Container, Row, Section } from "../../../../ui";
import Col from "../../../../ui/Col/Col";
import { P } from "../../../../ui/P";
import React, { useRef } from "react";
import { useAppearedFromBottom } from "../../../../hooks/useAppearedFromBottom";
import { SectionTitle } from "../../../../ui/SectionTitle";
import { SectionSubtitle } from "../../../../ui/SectionSubtitle";

const StorySection = ({ id }) => {
  const ref = useRef(null);
  const animateImg = useAppearedFromBottom({ ref });

  // console.log(a);
  return (
    <Section
      id={id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col md={5}>
            <div>
              <SectionSubtitle>Our Story</SectionSubtitle>
              <SectionTitle>Welcome</SectionTitle>
              <P>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </P>
              <P>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </P>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <img
              ref={ref}
              style={{
                transition: "opacity 400ms, transform 400ms",
                transform: `translateY(${animateImg ? 0 : 10}%)`,
                opacity: animateImg ? 1 : 0,
                maxWidth: "100%",
                height: "auto",
              }}
              src="https://preview.colorlib.com/theme/eatwell/images/xabout_img_1.jpg.pagespeed.ic.74Wz3xlDQI.webp"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default StorySection;
