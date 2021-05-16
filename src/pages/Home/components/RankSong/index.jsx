// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const RankSong = ({ item }) => (
  <>
    <span className="number">{item.id}</span>
    <div className="info-data-wrapper">
      <h3 className="name-music-chart">{item.name_song}</h3>
      <h4 className="name-singer-chart">{item.name_author}</h4>
    </div>
  </>
);

RankSong.propTypes = {
  item: PropTypes.object,
};

RankSong.defaultProps = {
  item: {},
};

export default RankSong;
