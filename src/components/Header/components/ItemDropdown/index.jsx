// libs
import React from "react";
// components
import ItemElement from "../ItemElement";
import ItemTitle from "../ItemTitle";
// mocks
import { topic } from "../../../../mocks";
// others
import "./style.scss";

const ItemDropdown = () =>
  topic.map((item) => (
    <ul key={item.id} className="item-dropdown-wrapper">
      <ItemTitle item={item} />
      <ItemElement item={item} />
    </ul>
  ));

export default ItemDropdown;
