// libs
import React from "react";
import ItemMvLarge from "../ItemMvLarge";
// components
import ItemMvSmall from "../ItemMvSmall";
// others
import "./style.scss";

const ListMvHot = () => (
  <ul className="list-mv-hot-wrapper">
    <ItemMvLarge />
    <ItemMvSmall />
  </ul>
);

export default ListMvHot;
