// libs
import React, { useEffect, useRef, useState } from "react";

// components
import { listImage } from "../../../../mocks";

// others
import "./style.scss";

SlideDefault.propTypes = {};

function SlideDefault() {
  const curentIndex = useRef(0);
  // console.log(curentIndex.current);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      const idx = curentIndex.current + 1;
      if (idx < 5 && idx >= 0) {
        setIndex(idx);
        curentIndex.current = idx;
      } else {
        setIndex(0);
        curentIndex.current = 0;
      }
    }, 5000);

    return () => clearInterval(loop);
  }, [index]);

  const handleHover = (idx) => setIndex(idx);

  const images = listImage.map((item, idx) => (
    <img
      onMouseOver={() => handleHover(idx)}
      onFocus={() => handleHover(idx)}
      src={item.src}
      key={item.id}
      alt="thumnail"
    />
  ));

  return (
    <div className="slide-default-wrap">
      <img className="img-default" src={listImage[index].src} alt="img" />
      <div className="thumbnail-slide">
        <div className="slide-content">
          <div className="thumbnail-item">{images}</div>
        </div>
      </div>
    </div>
  );
}

export default SlideDefault;
