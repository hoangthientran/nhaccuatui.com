// libs
import React from "react";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const ThumbnailMvSmall = ({ item }) => (
  <div className="thumbnail-mv-small">
    <span className="number-small">{item.id}</span>
    <PlayCircleOutlined className="icon-play-mv-small" />
    <img src={item.src} className="thumbnail-small" alt="" />
  </div>
);

ThumbnailMvSmall.propTypes = {
  item: PropTypes.object,
};

ThumbnailMvSmall.defaultProps = {
  item: {},
};

export default ThumbnailMvSmall;
