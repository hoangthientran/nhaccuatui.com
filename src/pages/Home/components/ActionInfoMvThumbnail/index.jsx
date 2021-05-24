// libs
import { PlayCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React from "react";
// components
import ViewListenMv from "../ViewListenMv";
// others
import "./style.scss";

const ActionInfoMvThumbnail = ({ item }) => (
  <div className="action-info-mv-wrapper">
    <ViewListenMv item={item} />
    <span className="icon_play">
      <PlayCircleOutlined className="icon-ant-play-circle" />
    </span>
  </div>
);

ActionInfoMvThumbnail.propTypes = {
  item: PropTypes.object,
};

ActionInfoMvThumbnail.defaultProps = {
  item: {},
};

export default ActionInfoMvThumbnail;
