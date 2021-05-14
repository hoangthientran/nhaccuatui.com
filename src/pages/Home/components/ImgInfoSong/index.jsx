// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ImgInfoSong = ({ item }) => (
  <div>
    <img className="img-info-song" alt="img-song" src={item.src_main} />
  </div>
);

ImgInfoSong.propTypes = {
  item: PropTypes.object,
};

ImgInfoSong.defaultProps = {
  item: {},
};

export default ImgInfoSong;
