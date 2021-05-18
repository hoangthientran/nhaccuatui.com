// libs
import React from "react";
// components
import NavigationTitle from "../NavigationTitle";
import ListSupport from "../ListSupport";
// others
import "./style.scss";

const NavigationOne = () => (
  <div className="navigation-one-wrapper">
    <NavigationTitle title="Hỗ trợ"></NavigationTitle>
    <ListSupport />
  </div>
);

export default NavigationOne;
