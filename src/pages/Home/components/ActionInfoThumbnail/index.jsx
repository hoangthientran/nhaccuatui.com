// libs
import React from "react";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// components
import ViewListen from "../ViewListion";
// others
import "./style.scss";

const ActionInfoThumbnail = ({ item }) => (
  <div className="action-infos-thumbnail-wrapper">
    <ViewListen item={item} />
    <span className="icon_play">
      <PlayCircleOutlined />
    </span>
  </div>
);

ActionInfoThumbnail.propTypes = {
  item: PropTypes.object,
};

ActionInfoThumbnail.defaultProps = {
  item: {},
};

export default ActionInfoThumbnail;
