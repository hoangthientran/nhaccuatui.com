// libs
import React from "react";
// components
import BoxEntertainment from "../BoxEntertainment";
import TitleBoxKey from "../TitleBoxKey";
// others
import "./style.scss";

const ListEntertainment = ({ defaultLanguage }) => (
  <div className="list-entertainment-wrapper">
    <TitleBoxKey nameLanguage={defaultLanguage.ENTERTAINMENT}>
      GIẢI TRÍ
    </TitleBoxKey>
    <BoxEntertainment />
  </div>
);

export default ListEntertainment;
