// libs
import React from "react";
// components
import FooterNavigation from "../../components/FooterNavigation";
import InforCompany from "../../components/InforCompany";
import SeperationLine from "../../components/SeparationLine";
// others
import "./style.scss";

const FooterContainer = () => (
  <div className="c-footer">
    <div className="c-footer__container">
      <FooterNavigation />
      <SeperationLine />
      <InforCompany />
    </div>
  </div>
);

export default FooterContainer;
