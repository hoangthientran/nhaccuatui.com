// libs
import React from "react";
import PropTypes from "prop-types";
import { EyeOutlined, PlayCircleOutlined } from "@ant-design/icons";
// dataSources
import { formatNumber } from "../../../../mocks";
// others
import "./style.scss";

function ActionInfoThumbnailKaraoke({ item }) {
  return (
    <div className="action-info-thumnail-karaoke-wrapper">
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

ActionInfoThumbnailKaraoke.propTypes = {
  item: PropTypes.object,
};

ActionInfoThumbnailKaraoke.defaultProps = {
  item: {},
};

export default ActionInfoThumbnailKaraoke;
