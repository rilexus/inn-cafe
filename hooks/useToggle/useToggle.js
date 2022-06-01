import { useReducer } from "react";

const useToggle = (initial = false) => {
  const [s, setS] = useReducer((s) => !s, initial);
  return [s, setS];
};

export default useToggle;
