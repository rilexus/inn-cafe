import { useStyle } from "../../hooks/useStyle";
import React from "react";

const CoverImg = ({ children, src, style }) => {
  const s = useStyle(
    {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundImage: `url("${src}")`,
      ...style,
    },
    [style]
  );
  return <div style={s}>{children}</div>;
};

export default CoverImg;
