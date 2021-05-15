// libs
import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const ButtonPlayList = () => (
  <p className="btn-playlist-wrapper">
    <span className="icon-playlist">
      <CaretRightOutlined />
    </span>
    <span className="btn-text">Nghe bài hát</span>
  </p>
);

export default ButtonPlayList;
