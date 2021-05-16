// libs
import React from "react";
// components
import BoxActionTop100 from "../BoxActionTop100";
import TextTop100 from "../TextTop100";
import AllTop100 from "../AllTop100";
// dataSources
import { listTop100 } from "../../../../mocks";
// others
import "./style.scss";

const BoxContentTop100 = () => (
  <div className="box-content-top-100">
    <ul className="box-top-100-ul">
      {listTop100.map((item) => (
        <li className="item-top-100" key={item.id}>
          <BoxActionTop100 item={item} />
          <TextTop100 item={item} />
        </li>
      ))}
    </ul>
    <AllTop100 />
  </div>
);

export default BoxContentTop100;
