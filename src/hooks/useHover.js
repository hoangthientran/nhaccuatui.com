import { useRef, useState, useEffect } from "react";

const useHover = () => {
  const ref = useRef(null);
  const [value, setValue] = useState(false);

  const handleMounseOver = (e) => {
    e.preventDefault();
    setValue(true);
  };
  const handleMounseOut = (e) => {
    e.preventDefault();
    setValue(false);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMounseOver);
      node.addEventListener("mouseout", handleMounseOut);
      return () => {
        node.removeEventListener("mouseover", handleMounseOver);
        node.removeEventListener("mouseout", handleMounseOut);
      };
    }
    return false;
  }, [ref.current]);

  return [ref, value];
};

export default useHover;
