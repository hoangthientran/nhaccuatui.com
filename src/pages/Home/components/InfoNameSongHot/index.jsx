// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InfoNameSongHot = ({ item }) => (
  <div className="info-song-wrapper">
    <h3 className="name-song">{item.name_song}</h3>
    <h4 className="name-author">{item.name_author}</h4>
  </div>
);

InfoNameSongHot.propTypes = {
  item: PropTypes.object,
};

InfoNameSongHot.defaultProps = {
  item: {},
};

export default InfoNameSongHot;
