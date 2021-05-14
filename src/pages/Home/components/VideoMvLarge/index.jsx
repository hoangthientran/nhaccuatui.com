// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ActionInfoMvThumbnail from "../ActionInfoMvThumbnail";
import ThumbnailMv from "../ThumbnailMv";
import TimeMv from "../TimeMv";
import NameMvLarge from "../NameMvLarge";
// others
import "./style.scss";

const VideoMvLarge = ({ item }) => (
  <div className="thumbnail-mv-wrapper">
    <ActionInfoMvThumbnail item={item} />
    <ThumbnailMv item={item} />
    <TimeMv item={item} />
    <NameMvLarge item={item} />
  </div>
);

VideoMvLarge.propTypes = {
  item: PropTypes.object,
};

VideoMvLarge.defaultProps = {
  item: {},
};

export default VideoMvLarge;
