import { useEffect, useState } from "react";

const useIntersectionObserver = ({ root = null, ref, threshold = 0.01 }) => {
  const [entry, setEntry] = useState();

  useEffect(() => {
    const hasIOSupport = !!window?.IntersectionObserver;
    if (!hasIOSupport) return;

    const element = ref.current;
    let options = {
      root: root,
      rootMargin: "0px",
      threshold: threshold,
    };

    const handle = ([entry]) => {
      setEntry(entry);
    };

    let observer = new IntersectionObserver(handle, options);
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [ref, root, threshold]);

  return entry;
};

export default useIntersectionObserver;
