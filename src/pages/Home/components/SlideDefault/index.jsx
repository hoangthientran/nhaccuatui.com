// libs
import React, { useEffect, useRef, useState } from "react";
// dataSources
import { listImage } from "../../../../mocks";
// others
import "./style.scss";

SlideDefault.propTypes = {};

function SlideDefault() {
  // 1
  const [index, setIndex] = useState(0);
  const curentIndex = useRef(0);

  // 3
  useEffect(() => {
    const loop = setInterval(() => {
      const index = curentIndex.current + 1;
      if (index < 5 && index >= 0) {
        setIndex(index);
        curentIndex.current = index;
        // console.log(curentIndex.current);
      } else {
        setIndex(0);
        curentIndex.current = 0;
      }
    }, 2000);

    return () => clearInterval(loop);
  }, [index]);

  const handleHover = (index) => setIndex(index);

  const images = listImage.map((item, index) => (
    <img
      onMouseOver={() => handleHover(index)}
      onFocus={() => handleHover(index)}
      className={`item-img active${item.id}`}
      src={item.src}
      key={item.id}
      alt="thumnail"
    />
  ));

  // 2
  return (
    <div className="slide-default-wrapper">
      <img className="img-default" src={listImage[index].src} alt="img" />
      <div className="thumbnail-slide">
        <div className="thumbnail-item">{images}</div>
      </div>
    </div>
  );
}

export default SlideDefault;
