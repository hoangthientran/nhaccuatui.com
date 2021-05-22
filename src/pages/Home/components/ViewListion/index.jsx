// libs
import React from "react";
import { CustomerServiceOutlined } from "@ant-design/icons";
// others
import "./style.scss";
import { formatNumber } from "../../../../constants";

const ViewListen = ({ item }) => (
  <div className="view-listion">
    <span className="icon-listen">
      <CustomerServiceOutlined />
    </span>
    <span className="number"> {formatNumber(item.number)} </span>
  </div>
);

export default ViewListen;
