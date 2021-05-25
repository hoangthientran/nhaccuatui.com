// libs
import PropTypes from "prop-types";
import React from "react";
// components
import ViewListenKaraokeSmall from "../ViewListenKaraokeSmall";
import IconPlayKaraokeSmall from "../IconPlayKaraokeSmall";
// others
import "./style.scss";

const ActionInfoThumbnailKaraoke = ({ item }) => (
  <div className="action-info-thumnail-karaoke-wrapper">
    <ViewListenKaraokeSmall item={item} />
    <IconPlayKaraokeSmall />
  </div>
);

ActionInfoThumbnailKaraoke.propTypes = {
  item: PropTypes.object,
};

ActionInfoThumbnailKaraoke.defaultProps = {
  item: {},
};

export default ActionInfoThumbnailKaraoke;
