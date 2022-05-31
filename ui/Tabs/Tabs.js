import styled from "styled-components";
import React, { createContext, useContext, useState } from "react";
import { Row } from "../Row";
import Col from "../Col/Col";
import { useStyle } from "../../hooks/useStyle";

const StyledTabHead = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const TabContext = createContext({});
const useTabsContext = () => useContext(TabContext);

const Tabs = ({ children, initialTab }) => {
  const state = useState(initialTab);
  return <TabContext.Provider value={state}>{children}</TabContext.Provider>;
};

const TabHead = (props) => {
  return (
    <Row justify={"center"}>
      <Col md={6}>
        <StyledTabHead {...props} role="tablist" />
      </Col>
    </Row>
  );
};
const StyledTabButton = styled.li`
  margin: 0 0.5rem;
`;

const StyledA = styled.a`
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.2em;
  border: 2px solid;
  border-radius: 0;
  display: block;
  padding: 0.5rem 1rem;
`;
const TabButton = ({ name, children }) => {
  const [activeTab, setActiveTab] = useTabsContext();
  const active = activeTab === name;

  const s = useStyle(
    {
      color: active ? "black" : "#ccc",
      borderColor: active ? "black" : "#ccc",
    },
    [active]
  );

  return (
    <StyledTabButton>
      <StyledA
        onClick={() => {
          setActiveTab(name);
        }}
        href={name}
        style={s}
      >
        {children}
      </StyledA>
    </StyledTabButton>
  );
};

const TabPanel = ({ children, name }) => {
  const [activeTab] = useTabsContext();
  const active = activeTab === name;
  const s = useStyle(
    {
      display: active ? "block" : "none",
    },
    [active]
  );
  return children(active);
};
Tabs.Head = TabHead;
Tabs.Button = TabButton;
Tabs.Panel = TabPanel;

export default Tabs;
