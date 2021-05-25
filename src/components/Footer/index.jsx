// libs
import React from "react";
// components
import FooterCooperation from "./mains/FooterCooperation";
import FooterContainer from "./mains/FooterContainer";
import FooterBoxCopyRight from "./mains/FooterBoxCopyRight";
// others
import "./style.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <FooterCooperation />
    <FooterContainer />
    <FooterBoxCopyRight />
  </div>
);

export default Footer;
