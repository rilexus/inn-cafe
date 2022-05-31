import React, { useMemo } from "react";
import { Container, Row, Section } from "../../../../ui";
import Col from "../../../../ui/Col/Col";
import { TextCenter } from "../../../../ui/TextCenter";
import { Tabs } from "../../../../ui/Tabs";
import { P } from "../../../../ui/P";
import { Panel } from "./components";
import menu from "./menu";
import styled from "styled-components";
import { md } from "../../../../ui/css";
import { textLGCss, textXLCss } from "@nightfall-ui/css";
import { SectionTitle } from "../../../../ui/SectionTitle";

const StyledItemImg = styled.img`
  width: 100%;
  border-radius: 1%;
  ${md`
    border-radius: 50%;
  `}
`;

const ItemName = styled.h5`
  ${textXLCss};
`;

const ItemPrice = styled.h6`
  ${textLGCss};
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const MenuItem = ({ name, img, description, price }) => {
  return (
    <Row
      style={{
        marginBottom: "2rem",
      }}
    >
      <Col md={3}>
        <StyledItemImg src={img.src} alt="" />
      </Col>
      <Col md={9}>
        <ItemName>{name}</ItemName>
        <P>{description}</P>
        <ItemPrice>{price}</ItemPrice>
      </Col>
    </Row>
  );
};

const split = (array) => {
  const clone = [...array];
  if (clone.length === 1) {
    return [clone, []];
  }
  const firstHalf = [...clone].slice(0, clone.length / 2);
  const secondHalf = [...clone].slice(clone.length / 2, clone.length);

  return [firstHalf, secondHalf];
};

const MenuSection = ({ id }) => {
  const menuByCategory = useMemo(
    () => menu.groupBy(({ category }) => category),
    []
  ); /* => {dinner: [{name:'', ...}], lunch: [{name: ''}]} */
  const categories = useMemo(
    () => Object.keys(menuByCategory),
    [menuByCategory]
  );

  return (
    <Section id={id}>
      <Container>
        <Row justify={"center"}>
          <Col
            md={7}
            style={{
              marginBottom: "3rem",
            }}
          >
            <TextCenter>
              <SectionTitle as={"h2"}>Delicious Menu</SectionTitle>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci at autem consequuntur enim in labore magnam minus
                mollitia quaerat quasi qui, quibusdam quisquam repellendus
                tempore totam veritatis voluptas voluptatem voluptates!
              </P>
            </TextCenter>
          </Col>
          <Col md={12}>
            <Tabs initialTab={`#${categories[0]}`}>
              <div
                style={{
                  marginBottom: "3rem",
                }}
              >
                <Tabs.Head>
                  {categories.map((c) => {
                    return (
                      <Tabs.Button name={`#${c}`} key={c}>
                        {c}
                      </Tabs.Button>
                    );
                  })}
                </Tabs.Head>
              </div>
              <div>
                {categories.map((c) => {
                  const items = menuByCategory?.[c] || [];
                  const [firstHalf, secondHalf] = split(items);

                  return (
                    <Panel name={`#${c}`} key={`panel-${c}`}>
                      <div>
                        <Row>
                          <Col md={6}>
                            {firstHalf.map((item) => {
                              return (
                                <MenuItem {...item} key={`item-${item.name}`} />
                              );
                            })}
                          </Col>
                          <Col md={6}>
                            {secondHalf.map((item) => {
                              return (
                                <MenuItem {...item} key={`item-${item.name}`} />
                              );
                            })}
                          </Col>
                        </Row>
                      </div>
                    </Panel>
                  );
                })}
              </div>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default MenuSection;
