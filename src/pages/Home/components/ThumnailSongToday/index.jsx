// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ThumnailSongToday = ({ item }) => (
  <span className="thumnail-song-today-wrapper">
    <img className="thumb-avatar-img" src={item.src_main} alt="img" />
  </span>
);

ThumnailSongToday.propTypes = {
  item: PropTypes.object,
};

ThumnailSongToday.defaultProps = {
  item: {},
};

export default ThumnailSongToday;
