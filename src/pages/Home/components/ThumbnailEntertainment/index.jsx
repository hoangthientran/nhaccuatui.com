// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ActionInfoThumbnailEntertaiment from "../ActionInfoThumbnailEntertaiment";
import AvatarEntertaiment from "../AvatarEntertaiment";
import TimeEntertaiment from "../TimeEntertaiment";
// others
import "./style.scss";

const ThumbnailEntertainment = ({ item }) => (
  <div className="thumbnail-entertainment-wrapper">
    <ActionInfoThumbnailEntertaiment item={item} />
    <AvatarEntertaiment item={item} />
    <TimeEntertaiment item={item} />
  </div>
);

ThumbnailEntertainment.propTypes = {
  item: PropTypes.object,
};

ThumbnailEntertainment.defaultProps = {
  item: {},
};

export default ThumbnailEntertainment;
