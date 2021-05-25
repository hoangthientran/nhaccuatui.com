// libs
import React from "react";
// components
import TitleBoxKey from "../TitleBoxKey";
import BoxEntertainment from "../BoxEntertainment";
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
