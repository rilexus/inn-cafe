import React from "react";
import { ErrorBoundary } from "../../ui/ErrorBoundary";
import { StorySection } from "./components/StorySection";
import { OffersSection } from "./components/OfferSection";
import { MenuSection } from "./components/MenuSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { Container } from "../../ui";
import styled, { css } from "styled-components";
import { useStyle } from "../../hooks/useStyle";
import { useScrollViewHeight } from "../../hooks/useScrollViewHeight";
import { sm } from "../../ui/css";
import { BurgerIcon } from "../../ui/icons/BurgerIcon";
import { useToggle } from "../../hooks/useToggle";
import { Media } from "../../ui/Media";

const flexCenterCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled.a`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: inherit;

  padding: 20px 20px;
  transition: color 200ms, background-color 200ms;
  &:hover {
    color: white;
    background-color: black;
  }

  ${flexCenterCss};
`;

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 3;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${sm`
    justify-content: end;
    flex-direction: row;
  `};
`;

const Nav = () => {
  const [menuOpen, toggleMenu] = useToggle();
  const pos = useScrollViewHeight();
  const animate = pos > 80;

  const navStyle = useStyle(
    {
      transition: "background-color 400ms ease",
      backgroundColor: animate
        ? "rgba(255,255,255,0.92)"
        : menuOpen
        ? "rgba(0,0,0,0.85)"
        : "transparent",
    },
    [animate, menuOpen]
  );

  const ulStyle = useStyle(
    {
      transition: "color 400ms ease, padding 400ms",
      color: animate ? "black" : "white",
    },
    [animate]
  );

  return (
    <StyledNav style={navStyle}>
      <Container>
        <Media
          as={"div"}
          default={`
            position: fixed;
            right: 2rem;
            top: 1rem;
          `}
          sm={`display: none;`}
          md={`display: visible;`}
        >
          <BurgerIcon
            open={menuOpen}
            onClick={toggleMenu}
            fill={animate ? "black" : "white"}
          />
        </Media>
        <Media xsm={menuOpen ? "display: visible;" : "display: none;"}>
          <StyledUl style={ulStyle}>
            <li>
              <NavLink href={"#about-section"}>About</NavLink>
            </li>
            <li>
              <NavLink href={"#offers-section"}>Offers</NavLink>
            </li>
            <li>
              <NavLink href={"#menu-section"}>Menu</NavLink>
            </li>
            <li>
              <NavLink href={"#contact-section"}>Contact</NavLink>
            </li>
          </StyledUl>
        </Media>
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
        <OffersSection id={"offers-section"} />
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
