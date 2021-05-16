// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ImgChartMusic = ({ item }) => (
  <>
    <div className="img-music-top">
      <span className="number-one">{item.id}</span>
      <img className="thumb-top-one" src={item.src} alt={item.name_song} />
    </div>
    <div>
      <h3 className="name-music-top-one">{item.name_song}</h3>
      <h4 className="name-author-top-one">{item.name_author}</h4>
    </div>
  </>
);

ImgChartMusic.propTypes = {
  item: PropTypes.object,
};

ImgChartMusic.defaultProps = {
  item: {},
};

export default ImgChartMusic;
