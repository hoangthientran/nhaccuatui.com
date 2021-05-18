// libs
import React from "react";
// components
import FooterBoxCooperation from "./mains/FooterBoxCooperation";
import FooterContainer from "./mains/FooterContainer";
import FooterBoxCopyRight from "./mains/FooterBoxCopyRight";
// others
import "./style.scss";

const Footer = () => (
  <div className="box-footer-wrapper">
    <FooterBoxCooperation />
    <FooterContainer />
    <FooterBoxCopyRight />
  </div>
);

export default Footer;
