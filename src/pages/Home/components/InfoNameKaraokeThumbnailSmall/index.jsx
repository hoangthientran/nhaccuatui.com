// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InfoNameMvThumbnailSmall = ({ item }) => (
  <div className="info-karaoke-wrapper">
    <h3 className="name-karaoke-small">{item.name_karaoke}</h3>
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
