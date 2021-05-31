// libs
import React from "react";
// components
import FooterCooperation from "./mains/FooterCooperation";
import FooterContainer from "./mains/FooterContainer";
import FooterBoxCopyRight from "./mains/FooterBoxCopyRight";
import Setting from "./mains/Setting";
// others
import "./style.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <FooterCooperation />
    <FooterContainer />
    <FooterBoxCopyRight />
    <Setting />
  </div>
);

export default Footer;
