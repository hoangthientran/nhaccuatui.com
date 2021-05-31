// libs
import React, { useEffect, useRef, useState } from "react";
// components
import TrendItem from "../TrendItem";
import TrendGalleryPaper from "../TrendGalleryPaper";
// mocks
import { listTrend } from "../../../../mocks";
// others
import "./style.scss";

const TrendList = () => {
  const [activeDefault, setActiveDefault] = useState(listTrend[0].src);
  const [index, setIndex] = useState(0);
  const curentIndex = useRef(0);

  useEffect(() => {
    const loop = setInterval(() => {
      const index = curentIndex.current + 1;
      if (index < 5 && index >= 0) {
        setIndex(index);
        setActiveDefault(listTrend[index].src);
        curentIndex.current = index;
      } else {
        setIndex(0);
        setActiveDefault(listTrend[0].src);
        curentIndex.current = 0;
      }
    }, 6000);

    return () => clearInterval(loop);
  }, [index]);

  return (
    <div className="trend-artist-wrapper">
      <TrendItem listTrend={listTrend} index={index} />
      <TrendGalleryPaper
        activeDefault={activeDefault}
        listTrend={listTrend}
        setIndex={setIndex}
        setActiveDefault={setActiveDefault}
      />
    </div>
  );
};

export default TrendList;
