// libs
import React from "react";
// components
import NavigationTitle from "../NavigationTitle";
import ContentTopKeyWord from "../ContentTopKeyWord";
import TextConnect from "../TextConnect";
import ListIcon from "../ListIcon";
import BoxImgApp from "../BoxImgApp";
// others
import "./style.scss";

const NavigationThree = () => (
  <div className="navigation-three-wrapper">
    <NavigationTitle>TOP TỪ KHÓA</NavigationTitle>
    <ContentTopKeyWord />
    <TextConnect />
    <ListIcon />
    <BoxImgApp />
  </div>
);

export default NavigationThree;
