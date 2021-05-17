// libs
import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
// dataSources
import { listImage } from "../../../../mocks";
// others
import "./style.scss";

SlideDefault.propTypes = {};

function SlideDefault() {
  // 1
  // const [activeDefault, setActiveDefault] = useState(listImage[0].status);
  const [index, setIndex] = useState(0);
  const curentIndex = useRef(0);

  // 3
  useEffect(() => {
    const loop = setInterval(() => {
      const index = curentIndex.current + 1;
      if (index >= 0 && index < 5) {
        setIndex(index);
        // setActiveDefault(listImage[index].status)
        curentIndex.current = index;
      } else {
        setIndex(0);
        curentIndex.current = 0;
      }
    }, 5000);

    return () => clearInterval(loop);
  }, [index]);

  // const handleHover = (index) => {
  //   setIndex(index)
  //   // setActiveDefault(active);
  // }
  const images = listImage.map((item, index) => (
    <img
      onMouseEnter={() => {
        setIndex(index);
      }}
      className={classnames({
        "item-img": true,
        active: item.status === "active",
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
}

export default SlideDefault;
