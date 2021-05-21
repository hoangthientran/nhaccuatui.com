// libs
import React from "react";
import { RightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const TitleBoxKey = ({ nameLanguage }) => (
  <div className="title-box-key-wapper">
    <h2>{nameLanguage}</h2>
    <span className="icon-right">
      <RightOutlined style={{ marginTop: "11px" }} />
    </span>
  </div>
);

export default TitleBoxKey;
