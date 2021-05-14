// libs
import React from "react";
import PropTypes from "prop-types";
import { EyeOutlined, PlayCircleOutlined } from "@ant-design/icons";
// dataSources
import { formatNumber } from "../../../../mocks";
// others
import "./style.scss";

const ActionInfoThumbnail = ({ item }) => (
  <div className="action-info-wrapper">
    <div className="view-listion">
      <span className="icon-view">
        <EyeOutlined />
      </span>
      <span className="number"> {formatNumber(item.number)} </span>
    </div>
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
