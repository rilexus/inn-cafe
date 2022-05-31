import React, { forwardRef } from "react";
import { Flex } from "../Flex";
import { useStyle } from "../../hooks/useStyle";

const Row = forwardRef(function Row({ justify, align, ...props }, ref) {
  const s = useStyle(
    {
      ...props.style,
      flexWrap: "wrap",
      marginRight: "-15px",
      marginLeft: "-15px",
    },
    [props.style]
  );
  return (
    <Flex {...props} align={align} justify={justify} style={s} ref={ref} />
  );
});

export default Row;
