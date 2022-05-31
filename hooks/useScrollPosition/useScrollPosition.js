import { useState, useEffect } from "react";

function useScrollPosition() {
  const isClient = typeof document === "object";
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!isClient) return;

    function handleScrollPosition() {
      const newPos = isClient
        ? document.documentElement.scrollTop || document.body.scrollTop
        : 1;
      setScrollPosition(newPos);
    }

    window.addEventListener("scroll", handleScrollPosition);
    return function clean() {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []); // on mount && unmount

  return scrollPosition;
}

export default useScrollPosition;
