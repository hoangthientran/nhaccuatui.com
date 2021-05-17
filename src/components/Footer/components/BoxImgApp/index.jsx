// libs
import React from "react";
// components
import ImgApp from "../ImgApp";
// mocks
import { listImageApp } from "../../../../mocks";
// others
import "./style.scss";

const BoxImgApp = () => (
  <ul className="box-img-app-wrapper">
    {listImageApp.map((item) => (
      <li key={item.id} className="item-img-app ">
        <ImgApp item={item} />
      </li>
    ))}
  </ul>
);

export default BoxImgApp;
