// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ImgInfoSong from "../ImgInfoSong";
import InfoSinger from "../InfoSinger";
// others
import "./style.scss";

const InfoSong = ({ item }) => (
  <div className="info-songs-wrapper">
    <ImgInfoSong item={item} />
    <InfoSinger item={item} />
  </div>
);

InfoSong.propTypes = {
  item: PropTypes.object,
};

InfoSong.defaultProps = {
  item: {},
};

export default InfoSong;
