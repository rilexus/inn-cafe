import React, { useState } from "react";
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
import { sm } from "../../ui/css";

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

const StyledUl = styled.ul`
  margin-left: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    margin-bottom: 2rem;
  }
  ${sm`
    justify-content: end;
    flex-direction: row;
  `};
`;

const Icon = styled.div`
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;

  span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  &:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }
  &:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }
  &:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }
  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;

const BurgerIcon = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Icon
      className={open ? "open" : ""}
      onClick={() => {
        setOpen((o) => !o);
        props?.onClick(open);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </Icon>
  );
};

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
      transition: "color 400ms ease, padding 400ms",
      color: animate ? "black" : "white",
      padding: `${animate ? 10 : 30}px 0`,
    },
    [animate]
  );

  return (
    <StyledNav style={navStyle}>
      <Container>
        <div
          style={{
            position: "fixed",
            right: "2rem",
            top: "1rem",
          }}
        >
          <BurgerIcon />
        </div>
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
