// libs
import React from "react";

// components
import FooterCooperation from "./mains/FooterCooperation";
import FooterContainer from "./mains/FooterContainer";
import FooterBoxCopyRight from "./mains/FooterBoxCopyRight";
import Setting from "./mains/Setting";
import TopBack from "./mains/TopBack";
// others
import "./style.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <FooterCooperation />
    <FooterContainer />
    <FooterBoxCopyRight />
    <Setting />
    <TopBack />
  </div>
);

export default Footer;
