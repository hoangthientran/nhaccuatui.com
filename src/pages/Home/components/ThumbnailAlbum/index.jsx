// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ActionInfoThumbnail from "../ActionInfoThumbnail";
import ThumnailSongToday from "../ThumnailSongToday";
// others
import "./style.scss";

const ThumbnailAlbum = ({ item }) => (
  <div className="thumbnail-album-wrapper">
    <ActionInfoThumbnail item={item} />
    <ThumnailSongToday item={item} />
  </div>
);

ThumbnailAlbum.propTypes = {
  item: PropTypes.object,
};

ThumbnailAlbum.defaultProps = {
  item: {},
};

export default ThumbnailAlbum;
