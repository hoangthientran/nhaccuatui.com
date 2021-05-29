import { useEffect, useState } from "react";

const useDebounce = (page, delay) => {
  const timeDelay = delay || 500;
  const [debounced, setDebounced] = useState(page);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(page);
    }, timeDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [page, timeDelay]);

  return debounced;
};

export default useDebounce;
