import React from "react";
import FooterNavigation from "../../components/FooterNavigation";
import InforCompany from "../../components/InforCompany";
import SeperationLine from "../../components/SeparationLine";
import "./style.scss";

FooterContainer.propTypes = {};

function FooterContainer() {
  return (
    <div className="c-footer">
      <div className="c-footer__container">
        <FooterNavigation />
        <SeperationLine />
        <InforCompany />
      </div>
    </div>
  );
}

export default FooterContainer;
