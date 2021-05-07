import React from "react";
import NavigationOne from "./mains/NavigationOne";
import NavigationTwo from "./mains/NavigationTwo";
import NavigationThree from "./mains/NavigationThree";
import InforCompany from "./mains/InforCompany";
import "./style.scss";
import SeperationLine from "./mains/SeparationLine";

FooterContainer.propTypes = {};

function FooterContainer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerNavigation">
          <NavigationOne />
          <NavigationTwo />
          <NavigationThree />
        </div>
        <SeperationLine />
        <InforCompany />
      </div>
    </div>
  );
}

export default FooterContainer;
