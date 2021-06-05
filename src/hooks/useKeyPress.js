// libs
import { useEffect, useState } from "react";

const useKeyPress = (targetKey) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // Add event listeners
  useEffect(() => {
    const downHandler = (e) => {
      e.preventDefault();
      if (e.key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = (e) => {
      e.preventDefault();
      if (e.key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

export default useKeyPress;
