// libs
import React from "react";
// components
import NavigationOne from "../NavigationOne";
import NavigationTwo from "../NavigationTwo";
import NavigationThree from "../NavigationThree";
// others
import "./style.scss";

const FooterNavigation = () => (
  <div className="footer-navigation-wrapper">
    <NavigationOne />
    <NavigationTwo />
    <NavigationThree />
  </div>
);

export default FooterNavigation;
