// libs
import React from "react";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const BoxActionTop100 = ({ item }) => (
  <div className="box-action-top-100">
    <img className="img-top-100-small" src={item.src} alt="img" />
    <PlayCircleOutlined className="icon-play-top-100" />
  </div>
);

BoxActionTop100.propTypes = {
  item: PropTypes.object,
};

BoxActionTop100.defaultProps = {
  item: {},
};

export default BoxActionTop100;
