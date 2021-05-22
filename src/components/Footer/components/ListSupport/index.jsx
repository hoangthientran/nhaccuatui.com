// libs
import React from "react";
// components
import ItemSupport from "../ItemSupport";
// mocks
import { listSupport } from "../../../../mocks";
// others
import "./style.scss";

const ListSupport = () => (
  <ul className="list-support-wrapper">
    {listSupport.map((item) => (
      <li key={item.id} className="item-support">
        <ItemSupport item={item} />
      </li>
    ))}
  </ul>
);

export default ListSupport;
