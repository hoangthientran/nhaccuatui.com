// libs
import React from "react";
// components
import ButtonTabMvSelect from "../ButtonTabMvSelect";
import TitleBoxKeyCommon from "../TitleBoxKeyCommon";
// others
import "./style.scss";

const BoxChatMv = ({ defaultLanguage }) => (
  <div className="box-chat-mv-wrapper">
    <TitleBoxKeyCommon nameLanguage={defaultLanguage.BXHMV} />
    <ButtonTabMvSelect />
  </div>
);

export default BoxChatMv;
