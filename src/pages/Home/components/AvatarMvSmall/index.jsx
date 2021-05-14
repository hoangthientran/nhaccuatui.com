// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const AvatarMvSmall = ({ item }) => (
  <span className="avatar-mv-small-wrapper">
    <img src={item.src_main} alt="mother's love: mother's day songs - v.a" />
  </span>
);

AvatarMvSmall.prototype = {
  item: PropTypes.object,
};

AvatarMvSmall.defaultProps = {
  item: {},
};
export default AvatarMvSmall;
