// libs
import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
// dataSources
import { listTrend } from "../../../../mocks";
// others
import "./style.scss";

const TrendList = () => {
  // 1
  const [index, setIndex] = useState(0);
  const curentIndex = useRef(0);

  useEffect(() => {
    const loop = setInterval(() => {
      const index = curentIndex.current + 1;
      if (index < 5 && index >= 0) {
        setIndex(index);
        curentIndex.current = index;
      } else {
        setIndex(0);
        curentIndex.current = 0;
      }
    }, 4000);

    return () => clearInterval(loop);
  }, [index]);

  const handleHover = (index) => setIndex(index);

  return (
    <div className="trend-artist-wrapper">
      <div className="trend-item">
        <img className="img-trend" src={listTrend[index].src} alt="" />
        <div className="trend-info">
          <p className="trend-top-week">Top Nghệ Sĩ Trending Trong Tuần</p>
          <p className="trend-name-singer-title">
            {listTrend[index].name_singer}
          </p>
        </div>
      </div>
      <div className="trend-gallery-paper">
        <ul className="list-image">
          {listTrend.map((item, index) => (
            <li className="trend-dot-circle" key={item.id}>
              <img
                onMouseOver={() => handleHover(index)}
                onFocus={() => handleHover(index)}
                className={classnames({
                  "img-dot": true,
                  active: item.status === "active",
                })}
                // className="img-dot"
                src={item.src}
                alt={item.name_singer}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendList;
