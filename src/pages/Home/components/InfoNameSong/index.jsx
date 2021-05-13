// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InfoNameSong = ({ item }) => (
  <div className="info-name-song-today-wrapper">
    <span className="info-name-song-today">{item.name_song}</span>
  </div>
);

InfoNameSong.propTypes = {
  item: PropTypes.object,
};

InfoNameSong.defaultProps = {
  item: {},
};

export default InfoNameSong;
