// libs
import React from "react";
import PropTypes from "prop-types";
// components
import InfoSong from "../InfoSong";
import BoxIconListen from "../BoxIconListen";
import BoxSongAction from "../BoxSongAction";
// others
import "./style.scss";

const Song = ({ item }) => (
  <div className="box-content-music-list-wrapper">
    <InfoSong item={item} />
    <BoxIconListen item={item} />
    <BoxSongAction />
  </div>
);

Song.propTypes = {
  item: PropTypes.object,
};

Song.defaultProps = {
  item: {},
};

export default Song;
