// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const AvatarEntertaiment = ({ item }) => (
  <span className="avatar-entertaiment-wrapper">
    <img src={item.src_main} alt={item.name_entertainment} />
  </span>
);

AvatarEntertaiment.prototype = {
  item: PropTypes.object,
};

AvatarEntertaiment.defaultProps = {
  item: {},
};
export default AvatarEntertaiment;
