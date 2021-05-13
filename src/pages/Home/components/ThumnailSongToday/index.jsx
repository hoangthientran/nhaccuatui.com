// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ThumnailSongToday = ({ item }) => (
  <span className="avatar">
    <img
      className="avatar-img"
      src={item.src_main}
      alt="mother's love: mother's day songs - v.a"
    />
  </span>
);

ThumnailSongToday.propTypes = {
  item: PropTypes.object,
};

ThumnailSongToday.defaultProps = {
  item: {},
};

export default ThumnailSongToday;
