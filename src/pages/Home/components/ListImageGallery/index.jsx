// libs
import React from "react";
import classnames from "classnames";
// others
import "./style.scss";

const ListImageGallery = ({
  listTrend,
  activeDefault,
  setIndex,
  setActiveDefault,
}) => (
  <ul className="list-image">
    {listTrend.map((item, index) => (
      <li className="trend-dot-circle" key={item.id}>
        <img
          onMouseEnter={() => {
            setIndex(index);
            setActiveDefault(item.src);
          }}
          className={classnames({
            "img-dot": true,
            active: activeDefault === item.src,
          })}
          src={item.src}
          alt={item.name_singer}
        />
      </li>
    ))}
  </ul>
);

export default ListImageGallery;
