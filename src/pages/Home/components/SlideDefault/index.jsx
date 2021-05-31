// libs
import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
// mocks
import { listImage } from "../../../../mocks";
// others
import "./style.scss";

const SlideDefault = () => {
  // 1
  const [activeDefault, setActiveDefault] = useState(listImage[0].src);
  const [index, setIndex] = useState(0);
  const curentIndex = useRef(0);

  // 3
  useEffect(() => {
    const loop = setInterval(() => {
      const index = curentIndex.current + 1;
      if (index >= 0 && index < 5) {
        setIndex(index);
        setActiveDefault(listImage[index].src);
        curentIndex.current = index;
      } else {
        setIndex(0);
        setActiveDefault(listImage[0].src);
        curentIndex.current = 0;
      }
    }, 7000);

    return () => clearInterval(loop);
  }, [index]);

  const images = listImage.map((item, index) => (
    <img
      onMouseEnter={() => {
        setIndex(index);
        setActiveDefault(item.src);
      }}
      className={classnames({
        "item-img": true,
        active: activeDefault === item.src,
      })}
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
};

export default SlideDefault;
