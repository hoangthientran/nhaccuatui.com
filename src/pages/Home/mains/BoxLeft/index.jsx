// libs
import React from "react";

// components
import ListAlbum from "../../components/ListAlbum";
import ListEntertainment from "../../components/ListEntertainment";
import ListKaraoke from "../../components/ListKaraoke";
import ListSong from "../../components/ListSong";
import MvHot from "../../components/MvHot";
import SlideDefault from "../../components/SlideDefault";
import SongHot from "../../components/SongHot";

// others
import "./style.scss";

BoxLeft.propTypes = {};

function BoxLeft() {
  return (
    <div className="box-left-wrap">
      <SlideDefault />
      <ListAlbum />
      <SongHot />
      <MvHot />
      <ListSong />
      <ListKaraoke />
      <ListEntertainment />
    </div>
  );
}

export default BoxLeft;
