// libs
import { EyeOutlined } from "@ant-design/icons";
import React from "react";
// constants
import { formatNumber } from "../../../../constants";
// others
import "./style.scss";

const ViewListenMv = ({ item }) => (
  <div className="view-listion-mv-wrapper">
    <span className="icon-view">
      <EyeOutlined />
    </span>
    <span className="number"> {formatNumber(item.number)} </span>
  </div>
);

export default ViewListenMv;
