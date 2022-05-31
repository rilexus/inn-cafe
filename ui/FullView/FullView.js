import React from "react";
import { useStyle } from "../../hooks/useStyle";

const FullView = ({ children, style }) => {
  const s = useStyle(
    {
      height: "100vh",
      width: "100vw",
      position: "relative",
      ...style,
    },
    [style]
  );
  return <div style={s}>{children}</div>;
};

export default FullView;
