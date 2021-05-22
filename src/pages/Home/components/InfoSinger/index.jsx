// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InfoSinger = ({ item }) => (
  <div className="information-singer-wrapper">
    <h3 className="name-song-info">{item.name_song}</h3>
    <div className="name-single-under-info">{item.name_author}</div>
  </div>
);

InfoSinger.propTypes = {
  item: PropTypes.object,
};

InfoSinger.defaultProps = {
  item: {},
};

export default InfoSinger;
