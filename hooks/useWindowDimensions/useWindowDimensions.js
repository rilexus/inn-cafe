import { useCallback, useEffect, useState } from "react";

function useWindowDimensions() {
  const isClient = typeof window === "object";

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : 1,
      height: isClient ? window.innerHeight : 1,
    };
  }, [isClient]);

  const [size, setSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) return;
    function handleResize() {
      setSize(getSize());
    }
    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient, getSize]);

  return size || getSize();
}

export default useWindowDimensions;
