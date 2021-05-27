// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailAlbum from "../ThumbnailAlbum";
import InfoNameSong from "../InfoNameSong";
// others
import "./style.scss";

const ElementSong = ({ songTodayList }) =>
  songTodayList.map((item) => (
    <li key={item.id} className="list-song-today">
      <ThumbnailAlbum item={item} />
      <InfoNameSong item={item} />
    </li>
  ));

ElementSong.propTypes = {
  songTodayList: PropTypes.array,
};

ElementSong.defaultProps = {
  songTodayList: [],
};

export default ElementSong;
