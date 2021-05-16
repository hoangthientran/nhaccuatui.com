// libs
import React from "react";
// components
import ButtonTabMvSelect from "../ButtonTabMvSelect";
import TitleBoxKeyCommon from "../TitleBoxKeyCommon";
// others
import "./style.scss";

const BoxChatMv = () => (
  <div className="box-chat-mv-wrapper">
    <TitleBoxKeyCommon>BXH MV</TitleBoxKeyCommon>
    <ButtonTabMvSelect />
  </div>
);

export default BoxChatMv;
