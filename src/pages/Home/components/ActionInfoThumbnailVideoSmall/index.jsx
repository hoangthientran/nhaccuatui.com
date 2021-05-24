// libs
import { PlayCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React from "react";
import ViewListenSmall from "../ViewListionSmall";
// others
import "./style.scss";

const ActionInfoThumbnailVideoSmall = ({ item }) => (
  <div className="action-info-thumnail-video-small-wrapper">
    <ViewListenSmall item={item} />
    <span className="icon_play-small">
      <PlayCircleOutlined className="icon-ant-play-circle" />
    </span>
  </div>
);

ActionInfoThumbnailVideoSmall.propTypes = {
  item: PropTypes.object,
};

ActionInfoThumbnailVideoSmall.defaultProps = {
  item: {},
};

export default ActionInfoThumbnailVideoSmall;
