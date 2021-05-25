// libs
import React from "react";
// components
import FooterNavigation from "../../components/FooterNavigation";
import SeperationLine from "../../components/SeparationLine";
import InforCompany from "../../components/InforCompany";
// others
import "./style.scss";

const FooterContainer = () => (
  <div className="c-footer-wrapper">
    <FooterNavigation />
    <SeperationLine />
    <InforCompany />
  </div>
);

export default FooterContainer;
