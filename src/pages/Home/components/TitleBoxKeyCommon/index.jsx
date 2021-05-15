// libs
import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const TitleBoxKeyCommon = (props) => (
  <div className="title-box-key-common-wapper">
    <h2>{props.children}</h2>
    <span className="icon-right-common">
      <PlayCircleOutlined style={{ marginTop: "11px", fontSize: "31px" }} />
    </span>
  </div>
);

export default TitleBoxKeyCommon;
