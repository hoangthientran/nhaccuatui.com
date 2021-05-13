// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ActionInfoThumbnail from "../ActionInfoThumbnail";
import ThumnailSongToday from "../ThumnailSongToday";
// others
import "./style.scss";

const ThumbnailSongHot = ({ item }) => (
  <div className="thumbnail-album-wrapper">
    <ActionInfoThumbnail item={item} />
    <ThumnailSongToday item={item} />
  </div>
);

ThumbnailSongHot.prototype = {
  item: PropTypes.object,
};

ThumbnailSongHot.defaultProps = {
  item: {},
};

export default ThumbnailSongHot;
