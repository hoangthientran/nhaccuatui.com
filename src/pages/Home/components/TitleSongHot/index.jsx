// libs
import React from "react";
import { RightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

TitleSongHot.propTypes = {};

function TitleSongHot() {
  return (
    <div className="title-box-key-wapper">
      <h2 className="title-box-key">MỚI PHÁT HÀNH</h2>
      <span className="icon-right">
        <RightOutlined style={{ marginTop: "11px" }} />
      </span>
    </div>
  );
}

export default TitleSongHot;
