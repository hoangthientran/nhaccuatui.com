// libs
import React from "react";
// components
import Cooperation from "./mains/Cooperation";
import CopyRight from "./mains/CopyRight";
import FooterContainer from "./mains/FooterContainer";
// others
import "./style.scss";

const Footer = () => (
  <div className="box-footer-wrapper">
    <Cooperation />
    <FooterContainer />
    <CopyRight />
  </div>
);

export default Footer;
