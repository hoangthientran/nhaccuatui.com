// libs
import React from "react";
import { EyeOutlined } from "@ant-design/icons";
// untils
import { formatNumber } from "../../../../untils";
// others
import "./style.scss";

const ViewListenSmall = ({ item }) => (
  <div className="view-listion-small-wrapper">
    <span className="icon-view-small">
      <EyeOutlined />
    </span>
    <span className="number"> {formatNumber(item.number)} </span>
  </div>
);

export default ViewListenSmall;
