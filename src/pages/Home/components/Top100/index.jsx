// libs
import React from "react";
// components
import Top100Header from "../Top100Header";
import BoxContentTop100 from "../BoxContentTop100";
// others
import "./style.scss";

const Top100 = () => (
  <div className="top-100-wrapper">
    <Top100Header />
    <BoxContentTop100 />
  </div>
);

export default Top100;
