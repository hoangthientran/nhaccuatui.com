// libs
import React from "react";
// components
import FooterCooperationTitle from "../../components/FooterCooperationTitle";
import FooterBoxCooperationList from "../../components/FooterBoxCooperationList";
// mocks
import { cooperationList } from "../../../../mocks";
// others
import "./style.scss";

const FooterBoxCooperation = () => (
  <div className="footer-cooperation-wrapper">
    <div className="footer-container-inner">
      <FooterCooperationTitle />
      <FooterBoxCooperationList cooperationList={cooperationList} />
    </div>
  </div>
);

export default FooterBoxCooperation;
