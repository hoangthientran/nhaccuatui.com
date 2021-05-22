// libs
import React from "react";
// components
import TitleBoxKey from "../TitleBoxKey";
import BoxKaraoke from "../BoxKaraoke";
// others
import "./style.scss";

const ListKaraoke = ({ defaultLanguage }) => (
  <div className="list-karaoke-wrapper">
    <TitleBoxKey nameLanguage={defaultLanguage.KARAOKE}>KARAOKE</TitleBoxKey>
    <BoxKaraoke />
  </div>
);

export default ListKaraoke;
