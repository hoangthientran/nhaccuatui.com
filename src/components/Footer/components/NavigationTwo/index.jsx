// libs
import React from "react";
// components
import NavigationTitle from "../NavigationTitle";
import ListProduct from "../ListProduct";
// others
import "./style.scss";

const NavigationTwo = () => (
  <div className="navigation-two-wrapper">
    <NavigationTitle title="Sản phẩm khác"></NavigationTitle>
    <ListProduct />
  </div>
);

export default NavigationTwo;
