// libs
import React from "react";
// components
import VideoMvLarge from "../VideoMvLarge";
// dataSources
import { listContentBigMvHot } from "../../../../mocks/Home/MvHot";
// others
import "./style.scss";

const ItemMvLarge = () => (
  <li className="item-mv-large-wrapper">
    <ul className="mv-large-wrapper">
      {listContentBigMvHot.map((item) => (
        <li key={item.id} className="item-mv-large">
          <VideoMvLarge item={item} />
        </li>
      ))}
    </ul>
  </li>
);

export default ItemMvLarge;
