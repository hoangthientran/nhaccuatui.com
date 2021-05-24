// libs
import React from "react";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// components
import ViewListenMv from "../ViewListenMv";
// others
import "./style.scss";

const ActionInfoThumbnailEntertaiment = ({ item }) => (
  <div className="action-info-thumnail-entertaiment-wrapper">
    <ViewListenMv item={item} />
    <span className="icon_play-small">
      <PlayCircleOutlined className="icon-ant-play-circle" />
    </span>
  </div>
);

ActionInfoThumbnailEntertaiment.propTypes = {
  item: PropTypes.object,
};

ActionInfoThumbnailEntertaiment.defaultProps = {
  item: {},
};

export default ActionInfoThumbnailEntertaiment;
