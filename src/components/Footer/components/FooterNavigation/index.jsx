// libs
import React from "react";
// components
import NavigationOne from "../NavigationOne";
import NavigationThree from "../NavigationThree";
import NavigationTwo from "../NavigationTwo";
// others
import "./style.scss";

const FooterNavigation = () => (
  <div className="footer-navigation">
    <NavigationOne />
    <NavigationTwo />
    <NavigationThree />
  </div>
);

export default FooterNavigation;
