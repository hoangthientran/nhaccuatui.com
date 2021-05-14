// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ActionInfoThumbnailVideoSmall from "../ActionInfoThumbnailVideoSmall";
// others
import "./style.scss";
import AvatarMvSmall from "../AvatarMvSmall";
import TimeMv from "../TimeMv";

const ThumbnailVideoSmall = ({ item }) => (
  <div className="thumbnail-video-small-wrapper">
    <ActionInfoThumbnailVideoSmall item={item} />
    <AvatarMvSmall item={item} />
    <TimeMv item={item} />
  </div>
);

ThumbnailVideoSmall.propTypes = {
  item: PropTypes.object,
};

ThumbnailVideoSmall.defaultProps = {
  item: {},
};

export default ThumbnailVideoSmall;
