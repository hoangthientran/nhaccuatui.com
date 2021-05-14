// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ActionInfoThumbnailKaraoke from "../ActionInfoThumbnailKaraoke";
// others
import "./style.scss";
import AvatarKaraoke from "../AvatarKaraoke";
import TimeKaraoke from "../TimeKaraoke";

const ThumbnailKaraoke = ({ item }) => (
  <div className="thumbnail-karaoke-wrapper">
    <ActionInfoThumbnailKaraoke item={item} />
    <AvatarKaraoke item={item} />
    <TimeKaraoke item={item} />
  </div>
);

ThumbnailKaraoke.propTypes = {
  item: PropTypes.object,
};

ThumbnailKaraoke.defaultProps = {
  item: {},
};

export default ThumbnailKaraoke;
