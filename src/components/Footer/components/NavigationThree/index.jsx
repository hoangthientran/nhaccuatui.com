// libs
import React from "react";
// components
import ContentTopKeyWord from "../ContentTopKeyWord";
import NavigationTitle from "../NavigationTitle";
import TextConnect from "../TextConnect";
import ListIcon from "../ListIcon";
// others
import "./style.scss";
import BoxImgApp from "../BoxImgApp";

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
