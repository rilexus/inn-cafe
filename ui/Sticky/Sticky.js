import { useStyle } from "../../hooks/useStyle";
import React from "react";

const Sticky = () => null;
Sticky.Item = ({ children, top, bottom, style }) => {
  const s = useStyle(
    {
      bottom,
      top,
      position: "sticky",
      ...style,
    },
    [top, bottom, style]
  );

  return <div style={s}>{children}</div>;
};
Sticky.Container = ({ children, height }) => {
  return (
    <div
      style={{
        height,
      }}
    >
      {children}
    </div>
  );
};

export default Sticky;
