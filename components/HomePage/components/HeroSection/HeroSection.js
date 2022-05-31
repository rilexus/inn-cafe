import React from "react";
import { Container, Row, Section } from "../../../../ui";
import Col from "../../../../ui/Col/Col";
import { TextCenter } from "../../../../ui/TextCenter";
import Stack from "../../../../ui/Stack/Stack";
import CoverImg from "../../../../ui/CoverImg/CoverImg";
import { FullView } from "../../../../ui/FullView";
import { FadeInTransition } from "react-transitions-library";

const HeroSection = () => {
  return (
    <Section
      style={{
        padding: 0,
      }}
    >
      <Stack>
        <CoverImg
          src={
            "https://preview.colorlib.com/theme/eatwell/images/xbg_3.jpg.pagespeed.ic.DtLaqDmSjy.webp"
          }
        >
          <FullView />
        </CoverImg>
        <FullView>
          <Container
            style={{
              height: "100%",
            }}
          >
            <Row
              align={"center"}
              justify={"center"}
              style={{
                height: "100%",
              }}
            >
              <Col md={12}>
                <TextCenter
                  style={{
                    color: "white",
                  }}
                >
                  <FadeInTransition
                    in
                    appear
                    timeout={1200}
                    delay={880}
                    from={0}
                    to={1}
                  >
                    <div>
                      <h1
                        style={{
                          fontSize: "5rem",
                        }}
                      >
                        Welcome to Inn Kaffee
                      </h1>
                      <h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </h2>
                    </div>
                  </FadeInTransition>
                </TextCenter>
              </Col>
            </Row>
          </Container>
        </FullView>
      </Stack>
    </Section>
  );
};

export default HeroSection;