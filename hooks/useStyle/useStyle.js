import { useMemo } from "react";

const useStyle = (style, deps) => useMemo(() => style, deps);

export default useStyle;
