// libs
import React from "react";
import PropTypes from "prop-types";
import { PlayCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const ImgMvMusic = ({ item }) => (
  <div className="info-data-mv-wrapper">
    <div className="img-mv-top">
      <span className="number-mv-one">{item.id}</span>
      <span className="icon-play-mv">
        <PlayCircleOutlined />
      </span>
      <img className="thumb-mv-top-one" src={item.src} alt={item.name_song} />
    </div>
    <div className="name-mv-large-wrapper">
      <h3 className="name-mv-big">{item.name_mv}</h3>
      <h4 className="name-singer-mv-large">{item.name_author}</h4>
    </div>
  </div>
);

ImgMvMusic.propTypes = {
  item: PropTypes.object,
};

ImgMvMusic.defaultProps = {
  item: {},
};

export default ImgMvMusic;
