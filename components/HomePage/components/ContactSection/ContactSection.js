import React from "react";
import { Container, Row, Section } from "../../../../ui";
import Col from "../../../../ui/Col/Col";
import { TextCenter } from "../../../../ui/TextCenter";
import { P } from "../../../../ui/P";
import { Button } from "../../../../ui/Button";
import { TextArea } from "../../../../ui/TextArea";
import { Input } from "../../../../ui/Input";
import { SectionTitle } from "../../../../ui/SectionTitle";

const ContactSection = ({ id }) => {
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
            <TextCenter>
              <SectionTitle>Get in Touch</SectionTitle>
            </TextCenter>
            <Row justify={"center"}>
              <Col md={7}>
                <TextCenter>
                  <P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    aspernatur, aut dignissimos dolorum ducimus est explicabo.
                  </P>
                </TextCenter>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <form>
              <label htmlFor="Name">
                <Input
                  type="text"
                  id={"name"}
                  name={"name"}
                  placeholder={"Name"}
                />
              </label>
              <br />
              <label htmlFor="Email">
                <Input
                  type="text"
                  id="Email"
                  name={"Email"}
                  placeholder={"Email"}
                />
              </label>
              <br />
              <label htmlFor="message"></label>
              <br />
              <TextArea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={"Message"}
              />
              <br />
              <Button type={"submit"}>Send</Button>
            </form>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <img
              style={{
                width: "100%",
                height: "auto",
              }}
              src="https://preview.colorlib.com/theme/eatwell/images/xabout_img_1.jpg.pagespeed.ic.74Wz3xlDQI.webp"
              alt=""
            />
            <P>
              Address:
              <br />
              121 Street, Melbourne Victoria
              <br />
              3000 Australia
              <br />
              <br />
              Phone: 90 987 65 44
              <br />
              Email:
              <br />
              info@yoursite.com
              <br />
            </P>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSection;
