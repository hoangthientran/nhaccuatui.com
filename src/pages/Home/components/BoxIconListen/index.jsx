// libs
import React from "react";
import { CustomerServiceOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
// untils
import { formatNumber } from "../../../../untils";
// others
import "./style.scss";

const BoxIconListen = ({ item }) => (
  <div className="box-icon-listen-wrapper">
    <CustomerServiceOutlined className="icon_listen" />
    <span className="number-view">{formatNumber(item.number)}</span>
  </div>
);

BoxIconListen.propTypes = {
  item: PropTypes.object,
};

BoxIconListen.defaultProps = {
  item: {},
};

export default BoxIconListen;
