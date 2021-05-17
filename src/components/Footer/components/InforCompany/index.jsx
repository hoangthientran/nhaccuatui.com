// libs
import React from "react";
// components
import ImgCompany from "../ImgCompany";
import ContentCompany from "../ContentCompany";
import ImgNotification from "../ImgNotification";
import ImgPermission from "../ImgPermission";
// others
import "./style.scss";

const InforCompany = () => (
  <div className="info-components-wrapper">
    <ImgCompany />
    <ContentCompany />
    <ImgNotification />
    <ImgPermission />
  </div>
);

export default InforCompany;
