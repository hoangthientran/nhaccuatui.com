// libs
import React, { useState } from "react";
import PropTypes from "prop-types";
// components
import AlbumSkeletonList from "./AlbumSkeletonList";
import ElementSong from "../ElementSong";
// others
import "./style.scss";

const ListSongToday = ({ songs, loading }) => {
  const [page, setPage] = useState(1);
  const totalPages = 3;

  return (
    <ul className="list-song-today-wrapper">
      {loading ? (
        <AlbumSkeletonList />
      ) : (
        <ElementSong
          songs={songs}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </ul>
  );
};

ListSongToday.propTypes = {
  songs: PropTypes.array,
  loading: PropTypes.bool,
};

ListSongToday.defaultProps = {
  songs: [],
  loading: true,
};

export default ListSongToday;
