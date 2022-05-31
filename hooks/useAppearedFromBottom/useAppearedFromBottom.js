import { useIntersectionObserver } from "../useIntersectionObserver";

const useAppearedFromBottom = (options) => {
  const entry = useIntersectionObserver(options);
  const rootBounds = entry?.rootBounds;
  const boundingClientRect = entry?.boundingClientRect;

  if (!rootBounds || !boundingClientRect) return false;

  const rootBoundsHeight = rootBounds.height;
  const boundingClientRectTop = boundingClientRect.top;

  // indicates if the element appeared from the bottom
  return boundingClientRectTop < rootBoundsHeight;
};

export default useAppearedFromBottom;
