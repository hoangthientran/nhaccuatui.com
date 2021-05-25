// libs
import React from "react";
// components
import TitleBoxKey from "../TitleBoxKey";
import ListTopic from "../ListTopic";
// others
import "./style.scss";

const BoxTopicMusic = ({ defaultLanguage }) => (
  <div className="box-topic-music-wrapper">
    <TitleBoxKey nameLanguage={defaultLanguage.TOPICHOT} />
    <ListTopic />
  </div>
);

export default BoxTopicMusic;
