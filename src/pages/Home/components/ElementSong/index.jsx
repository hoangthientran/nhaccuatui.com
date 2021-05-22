// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ThumbnailAlbum from "../ThumbnailAlbum";
import InfoNameSong from "../InfoNameSong";
// others
import "./style.scss";

const ElementSong = ({ songs }) =>
  songs.map((item) => (
    <li key={item.id} className="list-song-today">
      <ThumbnailAlbum item={item} />
      <InfoNameSong item={item} />
    </li>
  ));

ElementSong.propTypes = {
  songs: PropTypes.array,
};

ElementSong.defaultProps = {
  songs: [],
};

export default ElementSong;
