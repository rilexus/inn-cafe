import { useScrollPosition } from "../useScrollPosition";
import { useWindowDimensions } from "../useWindowDimensions";

const useScrollViewHeight = () => {
  const scrollPosition = useScrollPosition();
  const windowRect = useWindowDimensions();
  const windowHeight = windowRect?.height || 1;

  return Math.ceil((scrollPosition / windowHeight) * 100);
};

export default useScrollViewHeight;
