// libs
import React from "react";
import PropTypes from "prop-types";
import { CustomerServiceOutlined, PlayCircleOutlined } from "@ant-design/icons";
// mocks
import { formatNumber } from "../../../../mocks";
// others
import "./style.scss";

const ThumbnailSongHot = ({ item }) => (
  <div className="thumbnail-album-wrapper">
    <div className="action-info">
      <div className="view-listion">
        <span className="icon-listen">
          <CustomerServiceOutlined />
        </span>
        <span className="number-listen">{formatNumber(item.number)}</span>
      </div>
      <span className="icon_play">
        <PlayCircleOutlined />
      </span>
    </div>
    <span className="avatar">
      <img
        className="img-avatar"
        src={item.src_main}
        alt="mother's love: mother's day songs - v.a"
      />
    </span>
  </div>
);

ThumbnailSongHot.prototype = {
  item: PropTypes.object,
};

ThumbnailSongHot.defaultProps = {
  item: {},
};

export default ThumbnailSongHot;
