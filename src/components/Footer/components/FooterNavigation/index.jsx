import React from "react";
import NavigationOne from "../NavigationOne";
import NavigationThree from "../NavigationThree";
import NavigationTwo from "../NavigationTwo";

import "./style.scss";

FooterNavigation.propTypes = {};

function FooterNavigation() {
  return (
    <div className="footerNavigation">
      <NavigationOne />
      <NavigationTwo />
      <NavigationThree />
    </div>
  );
}

export default FooterNavigation;
