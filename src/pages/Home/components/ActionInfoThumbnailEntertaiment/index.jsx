// libs
import React from "react";
import PropTypes from "prop-types";
import { EyeOutlined, PlayCircleOutlined } from "@ant-design/icons";
// dataSources
import { formatNumber } from "../../../../mocks";
// others
import "./style.scss";

function ActionInfoThumbnailEntertaiment({ item }) {
  return (
    <div className="action-info-thumnail-entertaiment-wrapper">
      <div className="view-listion-small">
        <span className="icon-view-small">
          <EyeOutlined />
        </span>
        <span className="number"> {formatNumber(item.number)} </span>
      </div>
      <span className="icon_play-small">
        <PlayCircleOutlined />
      </span>
    </div>
  );
}

ActionInfoThumbnailEntertaiment.propTypes = {
  item: PropTypes.object,
};

ActionInfoThumbnailEntertaiment.defaultProps = {
  item: {},
};

export default ActionInfoThumbnailEntertaiment;
