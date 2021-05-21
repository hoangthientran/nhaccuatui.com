// libs
import React from "react";
// components
import BoxKaraoke from "../BoxKaraoke";
import TitleBoxKey from "../TitleBoxKey";
// others
import "./style.scss";

const ListKaraoke = ({ defaultLanguage }) => (
  <div className="list-karaoke-wrapper">
    <TitleBoxKey nameLanguage={defaultLanguage.KARAOKE}>KARAOKE</TitleBoxKey>
    <BoxKaraoke />
  </div>
);

export default ListKaraoke;
