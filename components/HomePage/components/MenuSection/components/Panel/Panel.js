import React from "react";
import { Tabs } from "../../../../../../ui/Tabs";

const Panel = ({ name, children }) => {
  return (
    <Tabs.Panel name={name}>
      {(active) => {
        return (
          <div
            style={{
              display: active ? "block" : "none",
            }}
            aria-expanded={active}
          >
            {children}
          </div>
        );
      }}
    </Tabs.Panel>
  );
};

export default Panel;
