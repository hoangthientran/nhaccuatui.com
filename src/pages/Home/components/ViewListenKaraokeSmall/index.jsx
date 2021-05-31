// libs
import { EyeOutlined } from "@ant-design/icons";
import React from "react";
// untils
import { formatNumber } from "../../../../untils";
// others
import "./style.scss";

const ViewListenKaraokeSmall = ({ item }) => (
  <div className="view-listion-small">
    <span className="icon-view-small">
      <EyeOutlined />
    </span>
    <span className="number"> {formatNumber(item.number)} </span>
  </div>
);

export default ViewListenKaraokeSmall;
