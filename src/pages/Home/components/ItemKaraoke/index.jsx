// libs
import React from "react";
import PropTypes from "prop-types";
// components
import KaraokeSmall from "../KaraokeSmall";
// others
import "./style.scss";

const ItemKaraoke = ({ karaokeList }) => (
  <li className="item-karaoke-wrapper">
    <KaraokeSmall karaokeList={karaokeList} />
  </li>
);

ItemKaraoke.propTypes = {
  karaokeList: PropTypes.array,
};

ItemKaraoke.defaultProps = {
  karaokeList: [],
};

export default ItemKaraoke;
