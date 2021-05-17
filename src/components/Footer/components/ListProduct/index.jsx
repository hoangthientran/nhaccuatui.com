// libs
import React from "react";
// components
import ItemSupport from "../ItemSupport";
// mocks
import { listTitleProduct } from "../../../../mocks";
// others
import "./style.scss";

const ListProduct = () => (
  <ul className="list-support">
    {listTitleProduct.map((item) => (
      <li key={item.id} className="item-support">
        <ItemSupport item={item} />
      </li>
    ))}
  </ul>
);

export default ListProduct;
