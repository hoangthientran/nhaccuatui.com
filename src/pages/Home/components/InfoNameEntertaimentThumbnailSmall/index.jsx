// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InfoNameEntertaimentThumbnailSmall = ({ item }) => (
  <div className="info-entertainment-wrapper">
    <h3 className="name-entertainment-small">{item.name_entertainment}</h3>
    <h4 className="name-author-small">{item.name_author}</h4>
  </div>
);

InfoNameEntertaimentThumbnailSmall.propTypes = {
  item: PropTypes.object,
};

InfoNameEntertaimentThumbnailSmall.defaultProps = {
  item: {},
};

export default InfoNameEntertaimentThumbnailSmall;
