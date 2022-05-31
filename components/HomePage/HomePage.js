import React from "react";
import { ErrorBoundary } from "../../ui/ErrorBoundary";
import { StorySection } from "./components/StorySection";
import { OffersSection } from "./components/OfferSection";
import { MenuSection } from "./components/MenuSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { Container } from "../../ui";
import { Flex } from "../../ui/Flex";
import styled from "styled-components";
import { useStyle } from "../../hooks/useStyle";
import { useScrollViewHeight } from "../../hooks/useScrollViewHeight";

const NavLink = styled.a`
  display: block;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0 20px;
  color: inherit;
`;

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Nav = () => {
  const pos = useScrollViewHeight();
  const animate = pos > 80;

  const navStyle = useStyle(
    {
      transition: "background-color 400ms ease",
      backgroundColor: animate ? "white" : "transparent",
    },
    [animate]
  );

  const ulStyle = useStyle(
    {
      marginLeft: "auto",
      alignItems: "center",
      display: "flex",
      transition: "color 400ms ease, padding 400ms",
      color: animate ? "black" : "white",
      padding: `${animate ? 10 : 30}px 0`,
      listStyle: "none",
    },
    [animate]
  );

  return (
    <StyledNav style={navStyle}>
      <Container>
        <Flex justify={"end"}>
          <ul style={ulStyle}>
            <li>
              <NavLink href={"#about-section"}>About</NavLink>
            </li>
            <li>
              <NavLink href={"#offer-section"}>Offer</NavLink>
            </li>
            <li>
              <NavLink href={"#menu-section"}>Menu</NavLink>
            </li>
            <li>
              <NavLink href={"#contact-section"}>Contact</NavLink>
            </li>
          </ul>
        </Flex>
      </Container>
    </StyledNav>
  );
};

const HomePage = () => {
  return (
    <div>
      <Nav />
      <ErrorBoundary fallback={<div></div>}>
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div></div>}>
        <OffersSection id={"offer-section"} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div></div>}>
        <MenuSection id={"menu-section"} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div></div>}>
        <StorySection id={"about-section"} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div></div>}>
        <ContactSection id={"contact-section"} />
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
