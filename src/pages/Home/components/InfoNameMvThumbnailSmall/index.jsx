// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InfoNameMvThumbnailSmall = ({ item }) => (
  <div className="info-song-mv-wrapper">
    <h3 className="name-song-small">{item.name_mv}</h3>
    <h4 className="name-author-small">{item.name_author}</h4>
  </div>
);

InfoNameMvThumbnailSmall.propTypes = {
  item: PropTypes.object,
};

InfoNameMvThumbnailSmall.defaultProps = {
  item: {},
};

export default InfoNameMvThumbnailSmall;
