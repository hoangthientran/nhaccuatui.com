// libs
import React from "react";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const TopBack = () => (
  <BackTop>
    <div className="back-top-wrapper">
      <ArrowUpOutlined />
    </div>
  </BackTop>
);

export default TopBack;
