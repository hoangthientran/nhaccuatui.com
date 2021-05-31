// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ThumbnailMv = ({ item }) => (
  <span className="thumb-mv-wrapper">
    <img className="img-mv" src={item.src_main} alt={item.name_song} />
  </span>
);

ThumbnailMv.propTypes = {
  item: PropTypes.object,
};

ThumbnailMv.defaultProps = {
  item: {},
};

export default ThumbnailMv;
