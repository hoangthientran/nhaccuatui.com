// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const AvatarKaraoke = ({ item }) => (
  <span className="avatar-karaoke-wrapper">
    <img src={item.src_main} alt={item.name_karaoke} />
  </span>
);

AvatarKaraoke.prototype = {
  item: PropTypes.object,
};

AvatarKaraoke.defaultProps = {
  item: {},
};
export default AvatarKaraoke;
