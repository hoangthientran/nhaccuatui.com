// libs
import React from "react";
// components
import ListMvHot from "../ListMvHot";
import TitleBoxKey from "../TitleBoxKey";
// others
import "./style.scss";

const MvHot = ({ defaultLanguage }) => (
  <div className="mv-hot-wrapper">
    <TitleBoxKey nameLanguage={defaultLanguage.MVHOT}>MV HOT</TitleBoxKey>
    <ListMvHot />
  </div>
);

export default MvHot;
