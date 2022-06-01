import React from "react";
import { Container, Row, Section } from "../../../../ui";
import Col from "../../../../ui/Col/Col";
import { TextCenter } from "../../../../ui/TextCenter";
import Stack from "../../../../ui/Stack/Stack";
import CoverImg from "../../../../ui/CoverImg/CoverImg";
import { FullView } from "../../../../ui/FullView";
import {
  FadeInTransition,
  TranslateTransition,
} from "react-transitions-library";

const HeroSection = () => {
  return (
    <Section
      style={{
        padding: 0,
      }}
    >
      <Stack>
        <CoverImg src={"/caffe_4032x3024.jpeg"}>
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              opacity: 0.8,
              inset: 0,
            }}
          />
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
                  <TranslateTransition
                    from={["0px", "50px"]}
                    to={["0px", "0px"]}
                    in
                    appear
                    timeout={1200}
                    delay={800}
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
                            fontSize: "4rem",
                            margin: 0,
                            marginBottom: "1rem",
                            lineHeight: 1,
                          }}
                        >
                          Welcome to Inn Kaffee
                        </h1>
                        <h2
                          style={{
                            fontWeight: "400",
                            margin: 0,
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </h2>
                      </div>
                    </FadeInTransition>
                  </TranslateTransition>
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
