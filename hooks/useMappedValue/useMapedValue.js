import useScrollPosition from "./../useScrollPosition";

// linear interpolation
// https://mattdesl.svbtle.com/linear-interpolation
function lerp(startValue, endValue, t) {
  return startValue * (1 - t) + endValue * t;
}

/**
 * maps curr value to a value 0-1
 * @param from
 * @param curr
 * @param to
 */
function mapScrollPos(from, curr, to) {
  if (curr <= from) return 0;
  if (curr >= to) return 1;
  return (curr - from) / (to - from);
}

function useMapScrollToValue(startValue, endValue, fromScrollPos, toScrollPos) {
  const currScrollPos = useScrollPosition();
  const mappedPos = mapScrollPos(fromScrollPos, currScrollPos, toScrollPos);
  return lerp(startValue, endValue, mappedPos);
}

export default useMapScrollToValue;
