import React from "react";
import AlbumHot from "../../components/AlbumHot";
import ListAlbum from "../../components/ListAlbum";
import ListEntertainment from "../../components/ListEntertainment";
import ListKaraoke from "../../components/ListKaraoke";
import ListSong from "../../components/ListSong";
import MvHot from "../../components/MvHot";
import SlideDefault from "../../components/SlideDefault";

import "./style.scss";

BoxLeft.propTypes = {};

function BoxLeft() {
  return (
    <div className="boxLeft">
      <SlideDefault />
      <ListAlbum />
      <AlbumHot />
      <MvHot />
      <ListSong />
      <ListKaraoke />
      <ListEntertainment />
    </div>
  );
}

export default BoxLeft;
