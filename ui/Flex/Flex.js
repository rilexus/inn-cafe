import React, { forwardRef } from "react";
import { useStyle } from "../../hooks/useStyle";

const Flex = forwardRef(function Flex(
  { align = "start", justify = "left", style, ...props },
  ref
) {
  const s = useStyle(
    {
      ...style,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
    },
    [justify, align, style]
  );

  return <div {...props} style={s} ref={ref} />;
});

export default Flex;
