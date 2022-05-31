import styled from "styled-components";
import React, { createContext, forwardRef, useContext, useState } from "react";
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

const StyledButton = styled.div``;
const TabButton = forwardRef(function TabButton(
  { name, children, as = "a", className, ...props },
  ref
) {
  const [activeTab, setActiveTab] = useTabsContext();
  const active = activeTab === name;

  return (
    <StyledButton
      ref={ref}
      as={as}
      className={[className, active ? "active" : ""].join(" ")}
      onClick={() => {
        setActiveTab(name);
      }}
      href={name}
    >
      {children}
    </StyledButton>
  );
});

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
